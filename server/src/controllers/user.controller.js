const bcrypt = require('bcrypt')

const {User} = require('../models/index')

const UNNECESSARY_FIELDS = '-student -teacher -parent -password -__v -verified'

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find().select(UNNECESSARY_FIELDS, 'userClass')
        if (!user) {
            return res.status(404).json({message: 'Користувачів не знайдено'})
        }
        return res.status(200).json({users: user})
    } catch (err) {
        console.log(err)
        res.status(400).send('Bad request')
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await User.findById(userId).select(UNNECESSARY_FIELDS, 'userClass')
        if (!user) {
            return res.status(404).json({message: 'Такого корисутвача не існує'})
        }
        return res.status(200).json({user})
    } catch (err) {
        console.log(err)
        res.status(400).send('Bad request')
    }
}

const getUsersWithoutConfirmRole = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        if (req.userRole !== 'Адмін') {
            return res.search(403).json({message: 'Доступ заборонено'})
        }
        const users = await User.find({verifiedRole: false}).select(UNNECESSARY_FIELDS, 'userClass')
        return res.status(200).json({users})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const updateUser = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        if (req.userId !== req.params.userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }

        const {
            firstName, lastName, middleName,
            phone, gender, city,
            street, apartments, zipCode } = req.body

        const update = {
            firstName,
            lastName,
            middleName,
            phone,
            gender,
            city,
            street,
            apartments,
            zipCode,
        }
        const user = await User.findByIdAndUpdate(req.userId, update)
        await user.save()
        return res.status(200).json({message: 'Дані оновлено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }

}

const changePassword = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        if (req.userId !== req.params.userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const {oldPassword, newPassword} = req.body
        const user = await User.findById(req.userId)
        const validPassword = bcrypt.compareSync(oldPassword, user.password)
        if (!validPassword) {
            return res.status(401).json({message: 'Невірний пароль'})
        }
        user.password = bcrypt.hashSync(newPassword, 7)
        await user.save()
        return res.status(200).json({message: 'Пароль змінено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

const setClass = async (req, res) => {
    try {
        const {classId} = req.body
        if (!req.userId) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        if (req.userId !== req.params.userId) {
            return res.status(403).json({message: 'Недостатньо прав'})
        }
        const user = await User.findById(req.userId)
        user.userClass = classId
        await user.save()
        return res.status(200).json({message: 'Клас змінено'})
    } catch (err) {
        console.log(err)
        return res.status(400).send('Bad request')
    }
}

module.exports = {
    getUser,
    getAllUsers,
    getUsersWithoutConfirmRole,
    changePassword,
    updateUser,
    setClass
}