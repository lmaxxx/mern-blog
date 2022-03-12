const logout = (req, res) => {
  try {
    req.logout()
    req.session.destroy()
    res.end()
  } catch(err) {
    res.status(500).json({msg: err.message})
  }
}

module.exports = {logout}
