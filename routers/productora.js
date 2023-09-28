const express = require('express')
const productora = express.Router()
const {postTipoProductora,getTipoProductora,deleteTipoProductora,putTipoProductora} = require('../controllers/productora')

productora.post('/productora',postTipoProductora)
productora.get('/productora',getTipoProductora)
productora.put('/productora',putTipoProductora)
productora.delete('/productora',deleteTipoProductora)

module.exports = productora
