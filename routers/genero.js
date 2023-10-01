const express = require('express')
const genero = express.Router()
const {getgenero,getgenerofirst,postgenero,putgenero} = require('../controllers/genero')

genero.get('/generos',getgenero)
genero.get('/genero',getgenerofirst)
genero.post('/genero',postgenero)
genero.put('/genero',putgenero)

module.exports = genero