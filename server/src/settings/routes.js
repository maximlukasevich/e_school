const {Router} = require('express')
const router = Router()

const authRouter = require('../routes/auth.router.js')
const userRouter = require('../routes/user.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)

module.exports = router