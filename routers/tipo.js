const express = require('express')
const tipo = express.Router()
const {deleteTipo,putTipo,postTipo,getTipo} = require('../controllers/tipo')

tipo.post('/tipo',postTipo)
tipo.get('/tipo',getTipo)
tipo.put('/tipo',putTipo)
tipo.delete('/tipo',deleteTipo)

module.exports = tipo