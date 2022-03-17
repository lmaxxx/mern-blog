const logout = (req, res) => {
  try {
    req.logout()
    req.session.destroy()
    res.json({
      isAuthenticated: false,
      user: undefined
    })
  } catch(err) {
    res.status(500).json({msg: err.message})
  }
}

module.exports = {logout}
