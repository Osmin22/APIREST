const TipoMedia = require('../models/media')
const {request,response} = require('express')
const TipoDirector = require('../models/director')
const TipoGenero = require('../models/genero')
const TipoProductora = require('../models/productora')
const Tipo = require('../models/tipo')

const posttipomedia = async (req = request,res = response) => {
    try{
        const data = req.body
        const {firstDirector,firstGenero,firstProductora,firstTipo} = data

        const director = await TipoDirector.findOne({
            _id:firstDirector._id,
            status:true
        })
        if(!director){
            return res.status(400).json({name:'Acción'})
        }

        const genero = await TipoGenero.findOne({
            _id:firstGenero._id,
            status:true
        })
        if(!genero){
            return res.status(400).json({name:'Acción'})
        }

        const productora = await TipoProductora.findOne({
            _id:firstProductora._id,
            status:true
        })
        if(!productora){
            return res.status(400).json({name:'Acción'})
        }

        const tipo = await Tipo.findOne({
            _id:firstTipo._id,
            status:true
        })
        if(!tipo){
            return res.status(400).json({name:'Acción'})
        }

        const media = new TipoMedia(data)
        await media.save()
        return res.status(201).json(media)

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const gettipomedia = async (req = request,res = response) => {
    try{
        const media = await TipoMedia.find()
        .populate({
            path:'TipoDirector',
            match:{status:true}
        })
        .populate({
            path:'TipoGenero',
            match:{status:true}
        })
        .populate({
            path:'TipoProductora',
            match: {status:true}
        })
        .populate({
            path:'Tipo',
            match:{status:true}
        })

        res.status().json(media)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const puttipomedia = async (req = request,res = response) => {
    try{
        const {id} = req.query
        const body = req.body
        const media = await TipoMedia.findByIdAndUpdate(id,body,{new:true})
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleltetipomedia = async (req = request,res = response) => {
    try{
        
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {posttipomedia,gettipomedia,puttipomedia,deleltetipomedia}