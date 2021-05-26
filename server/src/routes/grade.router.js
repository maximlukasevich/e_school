const {Router} = require('express')
const router = Router()

const {gradeController} = require('../controllers')
const {authMiddleware} = require('../middlewares')

router.get('/:lessonSlug', authMiddleware, gradeController.getGrades)
router.put('/:lessonSlug/:userId', authMiddleware, gradeController.setGrade)

module.exports = router