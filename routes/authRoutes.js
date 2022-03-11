const express = require("express")
const router = express.Router()
const authWithSocialMedia = require("../middlewares/authWithSocialMedia")
const authRedirect = require("../middlewares/authRedirect")
const {logout} = require("../controllers/authController");

router.get("/google", authWithSocialMedia("google", ["profile"]))
router.get("/github", authWithSocialMedia("github", ["user:email"]))
router.get("/google/callback", authRedirect("google", "/", "/"))
router.get("/github/callback", authRedirect("github", "/", "/"))

module.exports = router
