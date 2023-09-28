const express = require('express')
const cookieparse = require('cookie-parse') 
const app = express()


const director = require('./routers/director')
const genero = require('./routers/genero')
const productora = require('./routers/')
const tipo = require('./routers/tipo')
const testing = require('./routers/test')

app.use('/api/v1/directors',director)
app.use('/api/v1/generos',genero)
app.use('/api/v1/productors',productora)
app.use('/api/v1/tipys',tipo)
app.use('/api/v1/testing',testing)

app.use(express.json())
app.use(express.urlencoded({extends:true}))

module.exports = app