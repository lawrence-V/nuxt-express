const express = require('express')


const app = express()

// Api routes
const users = require('./routes/users')
const test  = require('./routes/test')

// import api routes
app.use(users)
app.use(test)

// Exports express app
 module.exports = app

