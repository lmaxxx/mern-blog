const { connect } = require('mongoose')
const dbOptions = require("./dbOptions")

const connectDb = () => {
  connect(process.env.MONGO_URI, dbOptions)
}

module.exports = connectDb
