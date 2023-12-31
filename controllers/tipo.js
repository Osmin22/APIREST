const Tipo = require('../models/tipo')
const {request,response} = require('express')

const getTipoFirst = async (req=request,res=response) => {
    try{
        const {id} = req.query
        const tipo = await Tipo.findById({id})
        return res.json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const getTipo = async (req=request,res=response) => {
    try{
        const {name} = req.query
        const tipo = await Tipo.find({name})
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
        return res.status(201).json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const putTipo = async (req=request,res=response) => {
    try{
        const body = req.body
        const _id = req.query._id
        body.datetimeupdate = new Date()

        const tipo = await Tipo.findByIdAndUpdate(_id,body,{new:true})
        return res.json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipo = async (req=request,res=response) => {
    try{
        const _id = req.query._id
        const tipo = await Tipo.findByIdAndRemove(_id) 
        return res.status(200).json(tipo)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {deleteTipo,putTipo,postTipo,getTipoFirst,getTipo}