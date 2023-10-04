const express = require('express')
const director = express.Router()
const {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirector,getTipoDirectorfirst} = require('../controllers/director')


director.get('/directors',getTipoDirector)
director.get('/director',getTipoDirectorfirst)
director.post('/director',postTipoDirector)
director.put('/director',putTipoDirector)
director.delete('/director',deleteTipoDirector)

module.exports = director