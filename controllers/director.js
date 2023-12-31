const TipoDirector = require('../models/director')
const {request,response} = require('express')

const postTipoDirector = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase() : ''
        const tipoDirectorDB = await TipoDirector.findOne({name})
        
        if(tipoDirectorDB){
            return res.status(404).json({name:'Acción'})
        }

        const data = {
            name:name
        }

        const tipodirector = new TipoDirector(data)
        await tipodirector.save()
        console.log(tipodirector)
        return res.status(201).json(tipodirector)

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const getTipoDirectorfirst = async (req=request,res=response) => {
    try{
        const {id} = req.query
        const director = await TipoDirector.findById({id})
        return res.json(director)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }

}

const getTipoDirector = async (req=request,res=response) => {
    try{
        const {status} = req.query
        const director = await TipoDirector.find({status})
        return res.json(director)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }

}

const putTipoDirector = async (req=request,res=response) => {
    try{
        const body = req.body
        const _id = req.query._id
        body.datetimeupdate = new Date()
        
        const director = await TipoDirector.findByIdAndUpdate(_id,body,{new:true})
        res.json(director)
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipoDirector = async (req=request,res=response) => {
    try{
        const _id = req.query._id
        const tipodirector = await TipoDirector.findByIdAndRemove(_id)
        console.log('Si alcanzo...')
        return res.status(200).json(tipodirector)
        
    }catch(e){
        console.log(e)
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}


module.exports = {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirectorfirst,getTipoDirector}