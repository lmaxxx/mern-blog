require("dotenv").config()
require("./auth/authStrategy")
const express = require("express")
const cors = require("cors");
const app = express()
const port = process.env.PORT || 7000
const conntectDb = require("./db/connectDb")
const passport = require("passport");
const session = require("express-session")
const authRouter = require("./routes/authRoutes")
const {logout} = require("./controllers/authController");

app.use(express.json())
app.use(cors())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRouter)

app.get("/", (req, res) => {
  res.json(req.user)
})

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


