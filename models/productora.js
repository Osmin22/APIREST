const {Schema,model} = require('mongoose')

const Productora = Schema({
    name:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true,
        default:true
    },
    datetimecrate:{
        type:Date,
        required:true,
        default:new Date()
    },
    datetimeupdate:{
        type:Date,
        required:true,
        default:new Date()
    },
    sloga:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true,
        default:''
    }
})

module.exports = model('TipoProductora',Productora)