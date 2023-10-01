const express = require('express')
const productora = express.Router()
const {postTipoProductora,getTipoProductora,getTipoProductoraFirst,deleteTipoProductora,putTipoProductora} = require('../controllers/productora')

productora.post('/productora',postTipoProductora)
productora.get('/productoras',getTipoProductora)
productora.get('/productora',getTipoProductoraFirst)
productora.put('/productora',putTipoProductora)
productora.delete('/productora',deleteTipoProductora)

module.exports = productora
