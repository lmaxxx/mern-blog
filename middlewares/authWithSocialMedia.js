const passport = require("passport");

const authWithSocialMedia = (provider, scopeArr) => {
  return passport.authenticate(provider, {scope: scopeArr})
}

module.exports = authWithSocialMedia
