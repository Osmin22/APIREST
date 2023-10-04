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
        const director = await TipoDirector.findOne({id})
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
        const id = req.query
        const director = await TipoDirector.findByIdAndUpdate(id,body,{new:true})

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const deleteTipoDirector = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase():''
        const tipodirectordelete = await TipoDirector.findOne({name})

        if(!tipodirectordelete){
            return res.status(500).json({status:'Error delete'})
        }

        const data = {
            name:name
        }

        const tipodirector = new TipoDirector()
        await tipodirector.deleteOne(tipodirectordelete)
        console.log('Si alcanzo...')
        return res.status(200).json({status:'Ok'})
        
    }catch(e){
        console.log(e)
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}


module.exports = {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirectorfirst,getTipoDirector}