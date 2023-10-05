const TipoGenero = require('../models/genero')
const {request,response} = require('express')


const postgenero = async (req = request,res = response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase() : ''
        const description = req.body.description ? req.body.description.toUpperCase() : ''
        const tipogeneroname = await TipoGenero.findOne({name})

        if(tipogeneroname){
            return res.status(404).json({name:'Acción'})
        }

        const data = {
            name:name,
            description:description
        }

        const tipogenero = new TipoGenero(data)
        await tipogenero.save()
        console.info(tipogenero)
        return res.status(201).json(tipogenero)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion '+e
        })
    }
    
}

const getgenerofirst = async (req = request,res = response) => {
    try{
        const {id} = req.query
        const genero = await TipoGenero.findById({id})
        return res.json(genero)
    }catch(e){
        return res.status(500).json({status:'Error get genero..'})
    }
}

const getgenero = async (req = request,res = response) => {
    try{
        const {status} = req.query
        const genero = await TipoGenero.find({status})
        return res.json(genero)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const putgenero = async (req = request,res = response) => {
    try{
        const body = req.body
        const _id = req.params.id
        body.datetimeupdate = new Date()

        const genero = await TipoGenero.findByIdAndUpdate(_id,body)
        return res.json(genero)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {getgenero,getgenerofirst,postgenero,putgenero}