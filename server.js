const https = require('https')
const app = require('./app')
/* const {connection} = require('./configuration/configurationCBD') */
const {conn} = require('./configuration/configurationBDMA')
const env = require('dotenv').config()

/* const connectionCBD = connection */
const connectionBDMA = conn()
app.set('port',process.env.PORT || 4000)


app.listen(app.get('port'),'127.0.0.1', () => {
    console.log(`http://127.0.0.1:${app.get('port')}`)
})