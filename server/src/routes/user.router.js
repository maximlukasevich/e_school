const {Router} = require('express')
const router = Router()

const {userController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.get('/', userController.getAllUsers)
router.get('/not-confirming-the-role', authMiddleware, userController.getUsersWithoutConfirmRole)
router.get('/:userId', userController.getUser)
router.put('/:userId', authMiddleware, userController.updateUser)
router.put('/:userId/change-password', authMiddleware, userController.changePassword)
router.put('/:userId/class', authMiddleware, userController.setClass)

module.exports = router