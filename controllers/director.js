const TipoDirector = require('../models/director')
const {request,response} = require('express')

const postTipoDirector = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase() : ''
        const tipoDirectorDB = TipoDirector.finOne({name})
        
        if(tipoDirectorDB){
            return res.status(404).json({error:`${name}`})
        }

        const data = {name}
        const tipodirector = new TipoDirector(data)
        await tipodirector.save()
        console.log(tipoDirector)
        return res.status(2001).json({tipodirector})

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

const putTipoDirector = async () => {
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
        const tipodirectordelete = TipoDirector.findOne({name})

        if(!tipodirectordelete){
            return res.status().json({statas:'Error delete'})
        }

        const data = {
            name:name
        }

        const tipodirector = new TipoDirector()
        await tipodirector.deleteOne(data)
        return res.status().json({status:'Ok'})
        
    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}


module.exports = {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirectorfirst,getTipoDirector}