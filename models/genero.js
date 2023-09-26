const {Schema,model} = require('mongoose')

const Genero = Schema({
    name:{
        type:String,
        require:true,
        default:''
    },
    status:{
        type:Boolean,
        require:true,
        default:true
    },
    datetimecreate:{
        type:Date,
        require:true,
        default:new Date()
    },
    datetimeupdate:{
        type:Date,
        require:false,
        default:''
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = model('TipoGenero',Genero)