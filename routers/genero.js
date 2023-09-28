const express = require('express')
const genero = express.Router()
const {getgenero,postgenero,putgenero} = require('../controllers/genero')

genero.use('/genero',getgenero)
genero.post('/genero',postgenero)
genero.put('/genero',putgenero)

module.exports = genero