const express = require('express')
const media = express.Router()
const {posttipomedia,gettipomedia,puttipomedia,deleltetipomedia} = require('../controllers/media')

media.post()
media.get()
media.put()
media.delete()

module.exports = media