const {Grades, Lesson, User} = require('../models')

const getGrades = async (req, res) => {
    try {
        const {lessonSlug} = req.params
        const lesson = await Lesson.findOne({slug: lessonSlug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого уроку не існує'})
        }
        const user = await User.findOne({_id: req.userId, role: 'Учень'}).populate('grades')
        if (!user) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        console.log(user)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

module.exports = {
    getGrades
}