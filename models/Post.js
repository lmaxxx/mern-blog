const {Schema, model} = require("mongoose")

const postSchema = new Schema({
  title: String,
  picture: String,
  creator: Schema.Types.ObjectId,
  creationDate: {type: Number, default: Date.now()},
  comments: {type: Schema.Types.ObjectId, ref: "Comment"},
  template: {
    main: [{type: Schema.Types.ObjectId, ref: "TemplateItem"}],
    leftSidebar: [{type: Schema.Types.ObjectId, ref: "TemplateItem"}],
    rightSidebar: [{type: Schema.Types.ObjectId, ref: "TemplateItem"}]
  }
})

const Post = model("Post", postSchema)

module.exports = Post
