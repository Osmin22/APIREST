const express = require('express')
const cors = require('cors') 
const app = express()

app.use(cors({origin:'*'}))
app.use(express.json())
app.use(express.urlencoded({extends:true}))

const director = require('./routers/director')
const genero = require('./routers/genero')
const media = require('./routers/media')
const productora = require('./routers/productora')
const tipo = require('./routers/tipo')
const testing = require('./routers/test')

app.use('/api/v1/directores',director)
app.use('/api/v1/generos',genero)
app.use('/api/v1/medias',media)
app.use('/api/v1/productoras',productora)
app.use('/api/v1/tipys',tipo)
/* app.use('/api/v1/testing',testing) */


module.exports = app