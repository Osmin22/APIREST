const Tipo = require('../models/tipo')
const {request,response} = require('express')

const getTipoFirst = async (req=request,res=response) => {
    try{
        const {id} = req.query
        const tipo = await Tipo.findOne({id})
        return res.json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const getTipo = async (req=request,res=response) => {
    try{
        const {status} = req.query
        const tipo = await Tipo.find({status})
        return res.json(tipo)
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
            return res.status(404).json({name:'Acción'})
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
        const body = req.body
        const id = req.query

        const tipo = await Tipo.findByIdAndUpdate(id,body,{new:true})
        return res.json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipo = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase():''
        const tipodelete = new Tipo.findOne({name})

        if(!tipodelete){
            return res.status().json({status:'Error delete'})
        }

        const data = {
            name:name
        }

        const tipo = new Tipo()
        await tipo.deleteOne(data)
        return res.status().json({status:'Ok'})

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {deleteTipo,putTipo,postTipo,getTipoFirst,getTipo}