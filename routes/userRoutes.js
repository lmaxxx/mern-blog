const express = require("express")
const route = express.Router()
const upload = require("../middlewares/upload")
const {getUser, deletePicture, updateLogin, uploadPicture} = require("../controllers/userController")

route.get("/", getUser)
route.patch("/deletePicture", deletePicture)
route.patch("/updateLogin", updateLogin)
route.post("/uploadPicture", upload, uploadPicture)

module.exports = route
