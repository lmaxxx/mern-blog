const Post = require("../models/Post")
const mongoose = require("mongoose")

const getAllPosts = async () => {
  const posts = await Post.find()
    .sort({creationDate: "desc"})
    .populate("creator")
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
    creator: "622fbe0667f490cc327e2722",//creatorId,
  }

  const newPost = await Post.create(postOptions)
  return newPost
}


module.exports = {getAllPosts, getPost, createPost}
