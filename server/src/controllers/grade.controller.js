const {Grades, Lesson, User} = require('../models')

const getGrades = async (req, res) => {
    try {
        const {lessonSlug} = req.params
        const lesson = await Lesson.findOne({slug: lessonSlug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        const grades = await Grades.findOne({lesson: lesson._id, student: req.userId})
        if (!grades) {
            return res.status(403).json({message: 'Оцінок немає'})
        }
        return res.status(200).json(grades)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const setGrade = async (req, res) => {
    try {
        const {lessonSlug, userId} = req.params
        const lesson = await Lesson.findOne({slug: lessonSlug})
        const user = await User.findById(userId)
        if (!lesson)  {
            return res.status(404).json({message: 'Такого уроку не  існує'})
        }
        if (!user || user.role !== 'Учень') {
            return res.status(400).json({message: 'Такого учня не існує'})
        }

    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

module.exports = {
    getGrades,
    setGrade
}