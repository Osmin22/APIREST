const {Schema,model} = require('mongoose')

const Productora = Schema({
    name:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    datetimecrate:{
        type:Date,
        require:true,
        default:new Date()
    },
    datetimeupdate:{
        type:Date,
        require:true,
        default:''
    },
    sloga:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = model('TipoProductora',Productora)