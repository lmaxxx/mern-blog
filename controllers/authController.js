const logout = (req, res) => {
  req.logout();
  req.session.destroy();
  res.end()
}

module.exports = {logout}
