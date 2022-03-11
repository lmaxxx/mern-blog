const passport = require("passport")
const {googleStrategyCallback} = require("../services/authService")
const GoogleStrategy = require('passport-google-oauth2').Strategy

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/api/auth/google/callback`,
    passReqToCallback: true,
  }, googleStrategyCallback
))

