const {Router} = require('express')
const router = Router()

const {authController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.post('/login', authController.login)
router.post('/registration', authController.registration)
router.get('/auth', authMiddleware, authController.auth)

module.exports = router

