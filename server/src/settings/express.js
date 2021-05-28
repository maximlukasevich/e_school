const bodyParser = require('body-parser')
const { corsMiddleware } = require('../middlewares')

const routes = require('./routes')

module.exports = (app) => {
    try {
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.use(corsMiddleware)
        app.use('/api', routes)
    } catch (err) {
        console.log(err)
    }
}