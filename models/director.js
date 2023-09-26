const {Schema,model} = require('mongoose')

const Director  = Schema({
    name:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    datetimecreate:{
        type:Date,
        require:true,
        default: new Date()
    },
    datetimeupdate:{
        type:date,
        require:false
    }
})

module.exports = model('TipoDirector',Director)