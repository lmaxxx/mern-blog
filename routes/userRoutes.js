const express = require("express")
const router = express.Router()
const {getUser, deletePicture, updateLogin, updatePicture} = require("../controllers/userController")

router.get("/", getUser)
router.delete("/picture", deletePicture)
router.patch("/picture", updatePicture)
router.patch("/login", updateLogin)

module.exports = router
