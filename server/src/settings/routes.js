const {Router} = require('express')
const router = Router()

const authRouter = require('../routes/auth.router.js')
const userRouter = require('../routes/user.router')
const classRouter = require('../routes/class.router')
const lessonRouter = require('../routes/lesson.router')

router.use('/auth', authRouter)
router.use('/users', userRouter)
router.use('/classes', classRouter)
router.use('/lessons', lessonRouter)

module.exports = router