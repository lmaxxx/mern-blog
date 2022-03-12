const Post = require("../models/Post")
const mongoose = require("mongoose")

const getAllPosts = async () => {
  const posts = await Post.find()
  return posts
}

const getPost = async (id) => {
  const post = await Post.findById(id)

  if(!post) {
    throw new Error("Post not found")
  }
}

const createPost = async (title, picture, template, creatorId) => {
  const postOptions = {
    title,
    picture,
    template,
    creator: creatorId,
  }

  const newPost = await Post.create(postOptions)
  return newPost
}


module.exports = {getAllPosts, getPost, createPost}
