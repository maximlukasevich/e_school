const {Router} = require('express')
const router = Router()

const {userController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.get('/', userController.getAllUsers)
router.get('/not-confirming-the-role', authMiddleware, userController.getUsersWithoutConfirmRole)
router.get('/:user_id', userController.getUser)
router.put('/:user_id', authMiddleware, userController.updateUser)
router.put('/:user_id/change-password', authMiddleware, userController.changePassword)

module.exports = router