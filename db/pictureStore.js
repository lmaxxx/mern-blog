const mongoose = require('mongoose')
const {GridFsStorage} = require('multer-gridfs-storage')
const Grid = require("gridfs-stream");
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')

const conn = mongoose.connection
let gfs, gridfsBucket
conn.once('open', () => {
  gridfsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'pictures'
  });

  gfs = Grid(conn.db, mongoose.mongo)
  gfs.collection('pictures')
})

const getPicture = async (req, res) => {
  try {
    const _id = new mongoose.Types.ObjectId(req.params.id);

    gfs.files.findOne({_id}, (err, file) => {

      if (!file || file.length == 0) {
        return res.status(404).json({
          err: "No files exist"
        })
      }

      const readStream = gridfsBucket.openDownloadStream(_id)
      readStream.pipe(res)

    })
  } catch (err) {
    res.status(404).json({msg: err.message})
  }
}

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: {useUnifiedTopology: true},
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err)
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'pictures',
        }
        resolve(fileInfo)
      })
    })
  },
})

const store = multer({storage})

module.exports = {store, getPicture}
