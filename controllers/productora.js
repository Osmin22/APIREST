const TipoProductora = require('../models/productora')
const {request,response} = require('express')

const getTipoProductoraFirst = async (req=request,res=response) => {
    try{
        const {id} = req.query
        const productora = await TipoProductora.findById({id})
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
        const description = req.body.description ? req.body.description.toUpperCase():''

        const tipoProductora = await TipoProductora.findOne({name})

        if(tipoProductora){
            return res.status(404).json({name:'Acción'})
        }

        const data = {
            name:name,
            sloga:sloga,
            description:description
        }

        const tipoproductora = new TipoProductora(data)
        await tipoproductora.save()
        console.log(tipoproductora)
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
        const _id = req.query._id
        body.datetimeupdate = new Date()

        const productora = await TipoProductora.findByIdAndUpdate(_id,body,{new:true})
        return res.json(productora)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipoProductora = async (req=request,res=response) => {
    try{
        const _id = req.query._id
        const tipodirector = await TipoProductora.findByIdAndRemove(_id)
        return res.status(200).json(tipodirector)

    }catch(e){
        return res.status(500).json({
            status:'Not pettion '+e
        })
    }
}

module.exports = {deleteTipoProductora,putTipoProductora,postTipoProductora,getTipoProductora,getTipoProductoraFirst}