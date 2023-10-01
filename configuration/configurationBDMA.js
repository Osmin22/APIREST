const mongoose = require('mongoose')

const conn = async () => {
    try{
        return await mongoose.connect(process.env.URI_MONGOATLAS,{

        }).finally(() => console.info('Connection Ok...'))
    }catch(e){
        console.error(e)
        console.log('Not connect...')
    }
} 

module.exports = {conn}