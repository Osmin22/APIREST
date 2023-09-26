const https = require('https')
const app = require('./app')
const {connection} = require('./configuration/configurationCBD')

const conn = connection

app.get('/',(req,res) => {
    req.params.time = Date.now()
    res.json({time:`${req.params.time}`})
    res.end()
})

/* const server = https.createServer(app) */

app.listen(3000,'127.0.0.1', () => {
    console.log(`https//127.0.0.1:${3000}`)
})