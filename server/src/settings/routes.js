const {Router} = require('express')
const router = Router()

const authRouter = require('../routes/auth.router.js')

router.use('/auth', authRouter)

module.exports = router