const logout = (req, res) => {
  try {
    req.logout()
    req.session.destroy()
    res.end()
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

module.exports = {logout, getUser}
