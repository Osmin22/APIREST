const express = require('express')
const cookieparse = require('cookie-parse') 
const app = express()
const genero = require('./routers/genero')
const testing = require('./routers/test')

app.use('/api/v1/generos',genero)
app.use('/api/v1/testing',testing)
app.use(express.json())
app.use(express.urlencoded({extends:true}))

module.exports = app