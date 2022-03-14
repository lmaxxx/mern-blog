const express = require("express")
const router = express.Router()
const authWithSocialMedia = require("../middlewares/authWithSocialMedia")
const authRedirect = require("../middlewares/authRedirect")

router.get("/google", authWithSocialMedia("google", ["profile"]))
router.get("/github", authWithSocialMedia("github", ["user:email"]))
router.get("/google/callback",
  authRedirect("google", "http://localhost:3000", "/"))
router.get("/github/callback",
  authRedirect("github", "http://localhost:3000", "/"))

module.exports = router
