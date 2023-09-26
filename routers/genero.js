const express = require('express')
const router = express.Router()
const {getgenero,postgenero,putgenero} = require('../controllers/genero')

router.use('/genero',getgenero)
router.post('/genero',postgenero)
router.put('/genero',putgenero)

module.exports = router