const TipoMedia = require('../models/media')
const {request,response} = require('express')
const TipoDirector = require('../models/director')
const TipoGenero = require('../models/genero')
const TipoProductora = require('../models/productora')
const Tipo = require('../models/tipo')

const posttipomedia = async (req = request,res = response) => {
    try{
        const data = req.body
        const {tipogenero,tipodirector,tipoproductora,tipo} = data

        const directorDB = await TipoDirector.findOne({
            _id:tipodirector._id,
            status:true
        })
        if(!directorDB){
            return res.status(400).json({name:'Director Acción'})
        }

        const generoDB = await TipoGenero.findOne({
            _id:tipogenero._id,
            status:true
        })
        if(!generoDB){
            return res.status(400).json({name:'Genero Acción'})
        }

        const productoraDB = await TipoProductora.findOne({
            _id:tipoproductora._id,
            status:true
        })
        if(!productoraDB){
            return res.status(400).json({name:'Productora Acción'})
        }

        const tipoDB = await Tipo.findOne({
            _id:tipo._id
        })
        if(!tipoDB){
            return res.status(400).json({name:'Tipo Acción'})
        }

        const media = new TipoMedia(data)
        await media.save()
        return res.status(201).json(media)

    }catch(e){
        return res.status(500).json({
            status:'Not pettion '+e
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
            path:'Tipo'
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