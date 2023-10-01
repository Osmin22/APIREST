const TipoProductora = require('../models/productora')
const {request,response} = require('express')

const getTipoProductoraFirst = async (req=request,res=response) => {
    try{
        const {id} = req.query
        const productora = await TipoProductora.findOne({id})
        return res.json(productora)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const getTipoProductora = async (req=request,res=response) => {
    try{
        const {status} = req.query
        const productora = await TipoProductora.find({status})
        return res.json(productora)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const postTipoProductora = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase():''
        const sloga = req.body.sloga ? req.body.sloga.toUpperCase():'' 
        const tipoProductora = TipoProductora.findOne({name})

        if(tipoProductora){
            return res.status(404).json({name:name})
        }

        const data = {
            name:name,
            sloga:sloga
        }

        const tipoproductora = new TipoProductora(data)
        await tipoproductora.save()
        return res.status(201).json(data)

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const putTipoProductora = async (req=request,res=response) => {
    try{
        const body = req.body
        const id= req.query
        const productora = await TipoProductora.findByIdAndUpdate(id,body,{new:true})
        return res.json(productora)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipoProductora = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase() : ''
        const productoraname = TipoProductora.findOne({name}) 

        if(!productoraname){
            return res.status().json({status:'Error delete'})
        }

        const data = {
            name:name
        }

        const tipoproductora = new TipoProductora()
        await tipoproductora.deleteOne(data)
        return res.status().json({status:'Ok'})

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {deleteTipoProductora,putTipoProductora,postTipoProductora,getTipoProductora,getTipoProductoraFirst}