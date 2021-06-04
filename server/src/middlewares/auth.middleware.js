const jwt = require('jsonwebtoken')

const JWT_SECRET = process.env.JWT_SECRET

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1]
        const decodedToken = jwt.decode(token, JWT_SECRET)
        req.userId = decodedToken.userId
        req.userRole = decodedToken.userRole
        next()
    } catch (err) {
        next()
    }
}