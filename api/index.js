// required Node modules
const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')
require('dotenv').config();

const app = express()

// middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('common'))

// routes
app.use('/', (req, res) => {})

// Database connection
async function dbConnect() {
  try {
    const db = await mongoose.connect(process.env.DB_URI, {
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    db && console.log(chalk.yellow('Connected to database'))
  } catch (err) { console.log(err) }
}

dbConnect()

app.get('/', (req, res) => res.send("Welcome"))

// server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(chalk.yellow('listening at http://localhost:' + PORT))
})