const mongoose = require('mongoose')

const conn = async () => {
    try{
        return await mongoose.connect(process.env.URI_MONGOATLAS)
        console.info('Connection...')
    }catch(e){
        console.error(e)
        console.log('Not connect...')
    }
} 

module.exports = {conn}