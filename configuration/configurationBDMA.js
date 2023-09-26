const mongoose = require('mongoose')

const conn = async () => {
    try{
        return await mongoose.connect(process.env.URI_MONGOATLAS)
    }catch(e){
        console.error(e)
        console.log('Not connect...')
    }
    console.log('Connection... Ok')
} 

module.exports = {conn}