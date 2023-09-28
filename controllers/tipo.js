const Tipo = require('../models/tipo')
const {request,response} = require('express')

const getTipo = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const postTipo = async (req=request,res=response) => {
    try{
        const name = req.body.name? req.body.name.toUpperCase() : ''
        const description = req.body.description ? req.body.description.toUpperCase() : ''
        const tiponame = await Tipo.findOne({name})

        if(tiponame){
            return res.status(501).json({status:'Error'})
        }

        const data = {
            name:name,
            description:description
        }

        const tipo = new Tipo(data)
        console.info(tipo) 
        await tipo.save()
        return res.status(201).json({status:'Ok'})
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const putTipo = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipo = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.export = {deleteTipo,putTipo,postTipo,getTipo}