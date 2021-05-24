const {Lesson} = require('../models')

const getAllLessons = async (req, res) => {
    try {
        const lessons = await Lesson.find().select('-__v')
        return res.status(200).json(lessons)
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const getLesson = async (req, res) => {
    try {
        const {slug} = req.params
        const lesson = await Lesson.findOne({slug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого уроку не існує'})
        }
        return res.status(200).json({lesson})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const createLesson = async (req, res) => {
    try {
        const {name} = req.body
        const userRole = req.userRole
        if (userRole !== 'Адмін' && userRole !== 'Вчитель') {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        let lesson
        if (userRole === 'Вчитель') {
            lesson = await Lesson.create({name, teacher: req.userId})
        } else {
            lesson = await Lesson.create({name})
        }
        await lesson.save()
        return res.status(200).json({message: 'Урок створено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const updateLesson = async (req, res) => {
    try {
        const {name, teacher, classes} = req.body
        const {slug} = req.params
        const userId = req.userId
        const userRole = req.userRole
        const lesson = await Lesson.findOne({slug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого уроку не існує'})
        }
        if (userRole !== 'Адмін' && userRole !== 'Вчитель' && lesson.teacher !== userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        lesson.name = name || lesson.name
        lesson.teacher = teacher || lesson.teacher
        const classesArray = new Map(Object.entries(classes))
        classesArray.forEach((item, i, arr) => {
            lesson.classes.push(item)
        })
        await lesson.save()
        return res.status(200).json({message: 'Дані оновлено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const deleteLesson = async (req, res) => {
    try {
        const {slug} = req.params
        const lesson = await Lesson.findOne({slug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        if (req.userRole !== 'Адмін' && req.userRole !== 'Вчитель' && lesson.teacher !== req.userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const deletedLesson = await Lesson.findOneAndDelete({slug})
        await deletedLesson.save()
        return res.status(200).json({message: 'Урок видалено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const addClass = async (req, res) => {
    try {
        const {classId} = req.body
        const {slug} = req.params
        const lesson = await Lesson.findOne({slug})
        if (req.userRole !== 'Адмін' && req.userRole !== 'Вчитель' && lesson.teacher !== req.userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        if (!lesson) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        lesson.classes.push(classId)
        await lesson.save()
        return res.status(200).json({message: 'Клас додано'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const deleteClass = async (req, res) => {
    try {
        const {classId} = req.body
        const {slug} = req.params
        const lesson = await Lesson.findOne({slug})
        if (!lesson) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        if (req.userRole !== 'Адмін' && req.userRole !== 'Вчитель' && lesson.teacher !== userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }

        const classIndex = lesson.classes.indexOf(classId)
        console.log(classIndex)
        lesson.classes.splice(classIndex, 1)
        await lesson.save()
        return res.status(200).json({message: 'Клас видалено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

module.exports = {
    getAllLessons,
    getLesson,
    createLesson,
    updateLesson,
    deleteLesson,
    addClass,
    deleteClass
}