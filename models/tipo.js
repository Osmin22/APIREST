const {Schema,model} = require('mongoose')

const Tipo = Schema({
    name:{
        type:String,
        required:true
    },
    datetimecreate:{
        type:Date,
        required:true,
        default: new Date()
    },
    datetimeupdate:{
        type:Date,
        required:true,
        default:''
    },
    description:{
        type:Date,
        required:true,
        default:''
    }
})

module.exports = model('Tipo',Tipo)