const express = require('express')
const productora = express.Router()
const {postTipoProductora,getTipoProductora,getTipoProductoraFirst,deleteTipoProductora,putTipoProductora} = require('../controllers/productora')


productora.get('/productoras',getTipoProductora)
productora.get('/productora',getTipoProductoraFirst)
productora.post('/productora',postTipoProductora)
productora.put('/productora',putTipoProductora)
productora.delete('/productora',deleteTipoProductora)

module.exports = productora
