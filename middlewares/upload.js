const {store} = require('../db/pictureStore')

const upload = (req, res, next) => {
  const upload = store.single('picture')

  upload(req, res, (err) => {
    if (err) {
      return res.status(500).json({msg: err.message})
    }

    next()
  })
}

module.exports = upload
