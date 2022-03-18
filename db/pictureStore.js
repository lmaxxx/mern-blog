const mongoose = require('mongoose')
const GridFsStorage = require('multer-gridfs-storage')
const multer = require('multer')
const crypto = require('crypto')
const path = require('path')
const dbOptions = require("./dbOptions")
const conn = mongoose.createConnection(process.env.MONGO_URI, dbOptions)

let gfs
conn.once('open', () => {
  gfs = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'pictures',
  })
})

const storage = new GridFsStorage({
  url: process.env.MONGO_URI,
  options: { useUnifiedTopology: true },
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

module.exports = {store, gfs}
