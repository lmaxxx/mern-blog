const passport = require("passport")
const User = require("../models/User")

require("./githubStrategy")
require("./googleStrategy")


passport.serializeUser((user, done) => {
  done(null, user.uid)
})

passport.deserializeUser( async (uid, done) => {
  const user = await User.findOne({uid})
  done(null, user)
})


