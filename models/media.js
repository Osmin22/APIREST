const {Schema,model} = require('mongoose')
const TipoDirector = require('./director')
const TipoGenero = require('./genero')
const TipoProductora = require('./productora')
const Tipo = require('./tipo')

const Media = Schema({
    serial:{
        type:Number,
        unique:true,
        require:true
    },
    title:{
        type:String,
        require:true,
        unique:true
    }
})