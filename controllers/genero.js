const TipoGenero = require('../models/genero')
const {request,response} = require('express')


const postgenero = async (req=request,res=response) => {
    try{
        const name = req.body.name ? req.body.name.toUpperCase() : ''
        const description = req.body.description ? req.body.description.toUpperCase() : ''
        const tipogeneroname = await TipoGenero.findOne({name})

        if(ipogeneroname){
            return response.status(404).json({name:'Acción'})
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
            status:'Not pettion'+e
        })
    }
    
}



const getgenero = async (req=request,res=response) => {


    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const putgenero = async (req=request,res=response) => {

    
    try{

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

module.exports = {getgenero,postgenero,putgenero}