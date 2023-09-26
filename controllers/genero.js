const TipoGenero = require('../models/genero')
const {request,response} = require('express')


const getgenero = (req=request,res=response) => {
    try{

    }catch(e){
        console.log(e)
    }
    res.json({
        process:'Ok',
        url:req.headers.origin,
        params:req.params
    })
    res.end()
}



const postgenero = (req=request,res=response) => {


    try{

    }catch(e){
        console.log(e)
    }
}

const putgenero = (req=request,res=response) => {

    
    try{

    }catch(e){
        console.log(e)
    }
}

module.exports = {getgenero,postgenero,putgenero}