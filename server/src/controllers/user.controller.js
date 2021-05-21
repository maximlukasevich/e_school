const {User} = require('../models/index')

const UNNECESSARY_FIELDS = '-student -teacher -parent -password -__v -verified'

const getAllUsers = async (req, res) => {
    try {
        const user = await User.find().select(UNNECESSARY_FIELDS)
        if (!user) {
            return res.status(404).json({message: 'Користувачів не знайдено'})
        }
        return res.status(200).json({users: user})
    } catch (err) {
        console.log(err)
        res.status(400)
    }
}

const getUser = async (req, res) => {
    try {
        const userId = req.params.user_id
        const user = await User.findById(userId).select(UNNECESSARY_FIELDS)
        if (!user) {
            return res.status(404).json({message: 'Такого корисутвача не існує'})
        }
        return res.status(200).json({user})
    } catch (err) {
        console.log(err)
        res.status(400)
    }
}

const updateUser = async (req, res) => {
    // name: {
    //     firstName: {type: String, required: true},
    //     lastName: {type: String, required: true},
    //     middleName: {type: String}
    // }

    // address: {
    //     city: {type: String},
    //     street: {type: String},
    //     apartments: {type: String},
    //     zipCode: {type: String}
    // }
    if (!req.userId) {
        return res.status(401).json({mesфsage: 'Необхідно авторизуватися'})
    }
    if (req.userId !== req.params.user_id) {
        return res.status(403).json({message: 'Недостатньо прав'})
    }
    const {name, phone, gender, address, birthday} = req.body
    const update = {
        name,
        phone,
        gender,
        address,
        birthday
    }
    const user = await User.findByIdAndUpdate(req.userId, update)
    await user.save()
    return res.status(200).json({message: 'Дані оновлено'})
}

module.exports = {
    getUser,
    getAllUsers,
    updateUser,
}