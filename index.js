// required Node MODULES
const express = require('express')
const morgan = require('morgan')
const chalk = require('chalk')
const mongoose = require('mongoose')

const app = express()

require('dotenv').config();
require('./config/database')


// MIDDLEWARE
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(morgan('common'))

// ROUTES
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
// app.use('/api', userRoutes)
app.use('/api', authRoutes)

// SERVER
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(chalk.bgBlue.yellow('listening at http://localhost:' + PORT))
})