const {getPicture} = require("../db/pictureStore")

const uploadPicture = (req, res) => {
  try {
    const {id} = req.file;

    return res.json({picture: `/api/picture/${id}`});
  } catch (err) {
    res.status(500).json({msg: err.message})
  }
}


module.exports = {uploadPicture, getPicture}
