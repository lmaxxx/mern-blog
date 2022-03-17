const express = require("express")
const route = express.Router()
const {getUser, deletePicture} = require("../controllers/userController")

route.get("/", getUser)
route.patch("/deletePicture", deletePicture)

module.exports = route
