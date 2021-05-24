const {Router} = require('express')
const router = Router()

const {lessonController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.get('/', lessonController.getAllLessons)
router.post('/', authMiddleware, lessonController.createLesson)

router.get('/:slug', lessonController.getLesson)
router.put('/:slug', authMiddleware, lessonController.updateLesson)
router.delete('/:slug', authMiddleware, lessonController.deleteLesson)

router.put('/:slug/class', authMiddleware, lessonController.addClass)
router.delete('/:slug/class', authMiddleware, lessonController.deleteClass)

module.exports = router