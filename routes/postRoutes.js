const express = require("express")
const {getPost, createPost} = require("../controllers/postController");
const router = express.Router()

router.post("/", createPost)
router.get("/:id", getPost)

module.exports = router
