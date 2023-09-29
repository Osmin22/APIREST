const TipoMedia = require('../models/media')
const {request,response} = require('express')

const posttipomedia = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const gettipomedia = async (req=request,res=response) => {
    try{
        
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const puttipomedia = async (req=request,res=response) => {
    try{
        
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleltetipomedia = async (req=request,res=response) => {
    try{
        
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {posttipomedia,gettipomedia,puttipomedia,deleltetipomedia}