const bodyParser = require('body-parser')

const routes = require('./routes')

module.exports = (app) => {
    try {
        app.use(bodyParser.json())
        app.use(bodyParser.urlencoded({ extended: true }))

        app.use('/api', routes)
    } catch (err) {
        console.log(err)
    }
}