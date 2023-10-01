const express = require('express')
const media = express.Router()
const {posttipomedia,gettipomedia,puttipomedia,deleltetipomedia} = require('../controllers/media')

media.post('/media',posttipomedia)
media.get('/media',gettipomedia)
media.put('/media',puttipomedia)
media.delete('/media',deleltetipomedia)

module.exports = media