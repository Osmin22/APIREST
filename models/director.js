const {Schema,model} = require('mongoose')

const Director  = Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
        default:true
    },
    datetimecreate:{
        type:Date,
        required:true,
        default: new Date()
    },
    datetimeupdate:{
        type:date,
        required:false,
        default:''
    }
})

module.exports = model('TipoDirector',Director)