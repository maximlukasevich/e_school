const {Class, User, Lesson} = require('../models')

const UNNECESSARY_FIELDS = '-password -verifiedRole -verifiedEmail -role -__v -kind'

const getClasses = async (req, res) => {
    try {
        const classes = await Class.find().select('-__v').populate('students lessons teacher')
        return res.status(200).json(classes)
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const getClass = async (req, res) => {
    try {
        const {name} = req.params
        const _class = await Class.findOne({name}).select('-__v')
        if (!_class) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        return res.status(200).json({class: _class})
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const getClassStudents = async (req, res) => {
    try {
        const {name} = req.params
        const uClass = await Class.findOne({name})
        if (!uClass) {
            return res.status(400).json({message: 'Такого класу не існує'})
        }
        const users = await User.find({userClass: uClass._id }).select(UNNECESSARY_FIELDS)
        return res.status(200).json(users)
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const getClassLessons = async (req, res) => {
    try {
        const {name} = req.params
        const uClass = await Class.findOne({name})
        if (!uClass) {
            return res.status(400).json({message: 'Такого класу не існує'})
        }
        const lessons = await Lesson.find({class: uClass._id }).select(UNNECESSARY_FIELDS).populate('teacher')
        return res.status(200).json(lessons)
    } catch (err) {
        console.log(err)
    }
}

const getClassTeacher = async (req, res) => {
    try {
        const {name} = req.params
        const students = await Class.findOne({name}).select('teacher -_id').populate('teacher', UNNECESSARY_FIELDS)
        if (!students) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        return res.status(200).json(students)
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const createClass = async (req, res) => {
    try {
        if (req.userRole !== 'Адмін') {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const {name} = req.body
        let _class
        try {
            _class = await Class.create({name})
        } catch (err) {
            console.log(err)
            return res.status(400).json({message: 'Помилка створення класу, можливо такий клас уже існує'})
        }
        await _class.save()
        return res.status(200).json({message: 'Клас створено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad Request')
    }
}

const setClassTeacher = async (req, res) => {
    try {
        const {userId} = req.body
        const {name} = req.params
        const _class = await Class.findOneAndUpdate({name}, {teacher: userId})
        if (!_class) {
            return res.status(404).json({message: 'Такого класу не існує'})
        }
        if (req.userRole !== 'Адмін') {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        await _class.save()
        return res.status(200).json({message: 'Дані оновлено'})
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const deleteClass = async (req, res) => {
    try {
        if (req.userRole !== 'Адмін') {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const {name} = req.params
        const _class = await Class.findOneAndDelete({name})
        if (!_class) {
            return res.status(400).json({message: 'Такого класу не існує'})
        }
        return res.status(200).json({message: `Клас ${name} видалено`})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad Request')
    }
}

const deleteTeacher = async (req, res) => {
    try {
        if (req.userRole !== 'Адмін') {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const {name} = req.params
        const _class = await Class.findOneAndUpdate({name}, {teacher: undefined})
        if (!_class) {
            return res.status(400).json({message: 'Такого класу не існує'})
        }
        return res.status(200).json({message: `Вчителя видалено`})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad Request')
    }
}

module.exports = {
    getClasses,
    getClass,
    getClassStudents,
    getClassLessons,
    getClassTeacher,
    createClass,
    setClassTeacher,
    deleteClass,
    deleteTeacher,
}