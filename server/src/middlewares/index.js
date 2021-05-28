const authMiddleware = require('./auth.middleware')
const corsMiddleware = require('./cors.middleware')

module.exports = {
    authMiddleware,
    corsMiddleware
}