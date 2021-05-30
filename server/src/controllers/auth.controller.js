const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const {User} = require('../models')

const JWT_SECRET = process.env.JWT_SECRET
const UNNECESSARY_FIELDS = '-student -teacher -parent -password -__v'

const generateAccessToken = (payload) => {
    return jwt.sign(payload, JWT_SECRET, {expiresIn: '1h'})
}

const login = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email}).select(UNNECESSARY_FIELDS.replace('-password', ''))
        if (!user) {
            return res.status(400).json({message: 'Такого користувача не існує'})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        user.password = undefined
        if (!validPassword) {
            return res.status(401).json({message: 'Невірний пароль'})
        }
        const payload = {
            userId: user._id,
            userRole: user.role
        }
        const token = generateAccessToken(payload)
        return res.status(200).json({
            message: 'Успішний вхід',
            token,
            user
        })
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const registration = async (req, res) => {
    // role enums: 'Учень', 'Вчитель', 'Батько'
    try {
        const {firstName, lastName, middleName, email, password, role} = req.body
        const candidate = await User.findOne({email})
        if (candidate) {
            return res.status(400).json({message: `Користувач з поштою ${email} уже існує`})
        }
        let _kind
        switch(role){
            case 'Учень': {
                _kind = 'Student'
                break
            }
            case 'Вчитель': {
                _kind = 'Teacher'
                break
            }
            case 'Батько': {
                _kind = 'Parent'
                break
            }
            default:
                return res.status(400).json({message: 'Невірна роль'})
        }
        const hashPassword = bcrypt.hashSync(password, 7)
        let user = await User.create({
            firstName,
            lastName,
            middleName,
            email,
            password: hashPassword,
            role,
            kind: _kind
        })
        await user.save()
        const payload = {
            userId: user._id,
            userRole: user.role
        }
        user.password = undefined
        user._v = undefined
        const token = generateAccessToken(payload)
        return res.status(201).json({
            message: 'Аккаунт створено',
            token,
            user
        })
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}

const auth = async (req, res) => {
    try {
        if (!req.userId) {
            return res.status(401).json({message: 'Необхідно авторизуватися'})
        }
        const user = await User.findById(req.userId).select(UNNECESSARY_FIELDS)
        if (!user) {
            return res.status(400).json({message: 'Таокго користувача не існує'})
        }
        const payload = {
            userId: user._id,
            userRole: user.role
        }
        const token = generateAccessToken(payload)
        return res.status(200).json({
            token,
            user
        })
    } catch (err) {
        console.log(err)
        return res.status(400)
    }
}


module.exports = {
    login,
    registration,
    auth
}