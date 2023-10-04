const express = require('express')
const tipo = express.Router()
const {deleteTipo,getTipoFirst,getTipo,postTipo,putTipo} = require('../controllers/tipo')

tipo.get('/tipo',getTipo)
tipo.get('/tipos',getTipoFirst)
tipo.post('/tipo',postTipo)
tipo.put('/tipo',putTipo)
tipo.delete('/tipo',deleteTipo)

module.exports = tipo