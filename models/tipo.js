const {Schema,model} = require('mongoose')

const Tipo = Schema({
    name:{
        type:String,
        require:true
    },
    datetimecreate:{
        type:Date,
        require:true,
        default: new Date()
    },
    datetimeupdate:{
        type:Date,
        require:true,
        default:''
    },
    description:{
        type:Date,
        require:true
    }
})

module.exports = model('Tipo',Tipo)