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
        const tipodirector = TipoDirector(data)
        await tipodirector.save()
        console.log(tipoDirector)
        return res.status(2001).json({tipodirector})

    }catch(e){
        return res.status(500).json({
            status:'Not pettion'+e
        })
    }
}

const getTipoDirector = async (req=request,res=response) => {
    try{

    }catch(e){
        console.error(e)
    }

}

const putTipoDirector = async () => {
    try{
        c
    }catch(e){
        console.error(e)
    }
}

const deleteTipoDirector = async () => {
    try{

    }catch(e){
        console.error(e)
    }
}


module.exports = {deleteTipoDirector,putTipoDirector,postTipoDirector,getTipoDirector}