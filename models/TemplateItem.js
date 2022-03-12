const {Schema, model} = require("mongoose")

const templateItemSchema = new Schema({
  type: String,
  align: String,
  src: String,
  html: String
})

const TemplateItem = model("TemplateItem", templateItemSchema)
