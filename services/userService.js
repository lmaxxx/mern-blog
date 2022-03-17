const User = require("../models/User")

const userService = {
  async deletePicture(userId) {
    await User.findByIdAndUpdate(userId, {picture: "https://teamgreen.org.in/wp-content/uploads/2019/07/boy-avatar-3.png"})
    const updatedUser = await User.findById(userId)

    return updatedUser
  }
}
module.exports = userService
