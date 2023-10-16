/* const {request,response} = require('express')

const getTest = (req=request,res=response) => {
    try{
        console.log(req.query.msj1)
        const {msj1,msj2} = req.query
        return res.status(201)
           .json({status:`${msj1} ${msj2}`})
    }catch(e){
        res.status(500).json({msj:`error`})
    }
}

module.exports = {getTest} */