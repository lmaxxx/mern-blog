require("dotenv").config()
const express = require("express")
const cors = require("cors");
const app = express()
const port = process.env.PORT || 7000
const conntectDb = require("./db/connectDb")

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
  res.send("hello")
})

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


