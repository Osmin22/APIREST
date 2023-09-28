const {Schema,model} = require('mongoose')

const Genero = Schema({
    name:{
        type:String,
        required:true
    },
    status:{
        type:Boolean,
        required:true,
        default:true
    },
    datetimecreate:{
        type:Date,
        required:true,
        default:new Date()
    },
    datetimeupdate:{
        type:Date,
        required:false,
        default:''
    },
    description:{
        type:String,
        required:true,
        default:''
    }
})

module.exports = model('TipoGenero',Genero)