const userService = require("../services/userService")

const deletePicture = async (req, res) => {
  try {
    const {_id} = req.user

    const updatedUser = await userService.deletePicture(_id)

    res.json({isAuthenticated: true, user: updatedUser})
  } catch(err) {
    res.status(500).json({msg: err.message})
  }
}

const getUser = (req, res) => {
  try {
    const userObj = {
      isAuthenticated: true,
      user: req.user
    }

    if(!req.user) userObj.isAuthenticated = false

    res.json(userObj)
  } catch(err) {
    res.status(401).json({msg: err.message})
  }
}

module.exports = {deletePicture, getUser}
