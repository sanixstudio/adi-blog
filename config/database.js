// Database connection
const mongoose = require('mongoose')
const chalk = require('chalk')

mongoose.connect(process.env.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
.then(() => console.log(chalk.yellow("Database connection successful")))
.catch((err) => console.log(err))