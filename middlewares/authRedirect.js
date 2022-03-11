const passport = require("passport");

const authRedirect = (provider, successPath, failPath) => {
  return passport.authenticate( provider, {
    successRedirect: successPath,
    failureRedirect: failPath
  })
}

module.exports = authRedirect
