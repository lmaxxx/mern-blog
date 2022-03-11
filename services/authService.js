const User = require("../models/User")

const socialMediaStrategy = async (user, done) => {
  const currentUser = await User.findOne({uid: user.uid})

  if (!currentUser) {
    const newUser = User.create(user)
    return done(null, newUser)
  }

  return done(null, currentUser)
}

const googleStrategyCallback = async (request, accessToken, refreshToken, profile, done) => {
  const user = {
    login: profile._json.name,
    uid: parseInt(profile._json.sub),
    picture: profile._json.picture
  }

  await socialMediaStrategy(user, done)
}

const githubStrategyCallback = async (accessToken, refreshToken, profile, done) => {
  const user = {
    login: profile._json.login,
    uid: profile._json.id,
    picture: profile._json.avatar_url
  }

  await socialMediaStrategy(user, done)
}

module.exports = {
  googleStrategyCallback,
  githubStrategyCallback
}
