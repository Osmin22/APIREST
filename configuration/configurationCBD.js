const mongoose = require('mongoose')

const connection = mongoose.connect(process.env.URI_LOCALHOST,{
    serverSelectionTimeoutMS:3000
}).catch((error) => console.log).finally(() => console.log('Connection YES'))

module.exports = {connection}