const postServices = require("../services/postService")

const getAllPosts = async (req, res) => {
  try {
    const posts = await postServices.getAllPosts()
    res.json(posts)
  } catch(err) {
    res.status(400).json({msg: err.message})
  }
}

const getPost = async (req, res) => {
  try {
    const {id} = req.params
    const post = await postServices.getPost(id)
    res.json(post)
  } catch(err) {
    res.status(400).json({msg: err.message})
  }
}

const createPost = async (req, res) => {
  try {
    const {title, picture, template} = req.body
    const newPost = await postServices.createPost(title, picture, template, req.user?._id)
    res.json({newPost})
  } catch(err) {
    res.status(400).json({msg: err.message})
  }
}

module.exports = {getAllPosts, getPost, createPost}
