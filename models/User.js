const {Schema, model} = require("mongoose")

const UserSchema = new Schema({
  login: {type: String, required: true},
  uid: {type: Number, required: true, unique: true},
  picture: {type: String, required: true}
})

const User = model("User", UserSchema)

module.exports = User
