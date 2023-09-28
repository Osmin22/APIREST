const TipoProductora = require('../models/productora')
const {request,response} = require('express')

const getTipoProductora = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const postTipoProductora = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase():''
        const tipoProductora = TipoProductora.findOne({name})

        if(tipoProductora){
            return res.status(404).json({name:name})
        }

        const data = {name}
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

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipoProductora = async (req=request,res=response) => {
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {deleteTipoProductora,putTipoProductora,postTipoProductora,getTipoProductora}