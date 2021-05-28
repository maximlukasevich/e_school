require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()

const PORT = process.env.PORT || 5000
const HOST = process.env.HOST || 'localhost'
const MONGO_URI = process.env.MONGO_URI

require('./settings/express')(app)

const start = async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        }, () => {console.log('Successfully connected to MongoDB')})
        app.listen(PORT, HOST, () => console.log(`The server started on ${HOST}:${PORT}`))
    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

start()