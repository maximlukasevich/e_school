const {Router} = require('express')
const router = Router()

const {userController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.get('/', userController.getAllUsers)
router.get('/:user_id', userController.getUser)
router.put('/:user_id', authMiddleware, userController.updateUser)

module.exports = router