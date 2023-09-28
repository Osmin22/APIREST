const express = require('express')
const director = express.Router()
const {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirector} = require('../controllers/director')

director.post('/director',postTipoDirector)
director.get('/director',getTipoDirector)
director.put('/director',putTipoDirector)
director.delete('/director',deleteTipoDirector)

module.exports = director