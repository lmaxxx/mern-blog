const {Schema, model} = require("mongoose")

const commentSchema = new Schema({
  creator: Schema.Types.ObjectId,
  creationDate: {type: Number, default: Date.now()},
  text: String
})

const Comment = model("Comment", commentSchema)

module.exports = Comment
