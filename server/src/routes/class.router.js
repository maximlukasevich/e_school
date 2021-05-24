const {Router} = require('express')
const router = Router()

const classController = require('../controllers/class.controller')
const {authMiddleware} = require('../middlewares')

router.get('/', classController.getClasses)
router.post('/', authMiddleware, classController.createClass)

router.get('/:name', classController.getClass)
router.delete('/:name', authMiddleware, classController.deleteClass)

router.get('/:name/teacher', classController.getClassTeacher)
router.put('/:name/teacher', authMiddleware, classController.setClassTeacher)
router.delete('/:name/teacher', authMiddleware, classController.deleteTeacher)

router.get('/:name/students', classController.getClassStudents)
router.put('/:name/students', authMiddleware, classController.setStudents)
router.delete('/:name/students', authMiddleware, classController.deleteStudent)

module.exports = router