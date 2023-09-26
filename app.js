const express = require('express')
const cookieparse = require('cookie-parse') 
const app = express()
const router = require('./routers/genero')

app.use('/api',router)
app.use(express.json())
app.use(express.urlencoded({extends:true}))

module.exports = app