const passport = require("passport")
const GitHubStrategy = require("passport-github2").Strategy
const {githubStrategyCallback} = require("../services/authService")

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: `http://localhost:${process.env.PORT}/api/auth/github/callback`
  }, githubStrategyCallback
))
