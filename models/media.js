const {Schema,model} = require('mongoose')
const TipoDirector = require('./director')
const TipoGenero = require('./genero')
const TipoProductora = require('./productora')
const Tipo = require('./tipo')

const Media = Schema({
    serial:{
        type:Number,
        unique:true,
        required:true
    },
    sinopsis:{
        type:String,
        require:true,
        default:''
    },
    url:{
        type:String,
        required:false,
        default:''
    },
    image:{
        type:String,
        require:false,
        default:''
    },
    datetimecreate:{
        type:Date,
        required:true,
        default:new Date()
    },
    datetimeupdate:{
        type:Date,
        required:true,
        default:new Date()
    },
    anoestreno:{
        type:Date,
        required:true,
        default:''
    },
    title:{
        type:String,
        required:true,
        unique:true
    },
    tipogenero:{
        type:Schema.Types.ObjectId,
        ref:'TipoGenero',
        required:true
    },
    tipodirector:{
        type:Schema.Types.ObjectId,
        ref:'TipoDirector',
        required:true
    },
    tipoproductora:{
        type:Schema.Types.ObjectId,
        ref:'TipoProductora',
        required:true
    },
    tipo:{
        type:Schema.Types.ObjectId,
        ref:'Tipo',
        required:true
    }
})

module.exports = model('TipoMedia',Media)