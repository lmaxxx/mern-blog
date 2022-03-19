const express = require("express")
const upload = require("../middlewares/upload");
const {uploadPicture} = require("../controllers/pictureController");
const {getPicture} = require("../controllers/pictureController");
const router = express.Router()

router.post("/upload", upload, uploadPicture)
router.get("/:id", getPicture)

module.exports = router
