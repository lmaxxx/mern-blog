require("dotenv").config()
require("./auth/authStrategy")
const express = require("express")
const cors = require("cors");
const app = express()
const port = process.env.PORT || 8080
const conntectDb = require("./db/connectDb")
const passport = require("passport");
const session = require("express-session")
const authRouter = require("./routes/authRoutes")
const {logout} = require("./controllers/authController");
const postRoutes = require("./routes/postRoutes")
const {getAllPosts} = require("./controllers/postController");

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize())
app.use(passport.session())


app.use("/api/auth", authRouter)
app.use("/api/post", postRoutes)

app.get("/", (req, res) => {
  res.json(req.user)
})

app.get("/api/posts", getAllPosts)
app.get("/api/logout", logout)

const start = async () => {
  try {
    await conntectDb()

    app.listen(port, () => {
      console.log(`Server is started by port ${port}`)
    })
  } catch(err) {
    console.log(err)
  }
}

start()


