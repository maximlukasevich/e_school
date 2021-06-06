const {Schema, model} = require('mongoose')

const Class = new Schema({
    name: {type: String, required: true, unique: true},
    teacher: {type: Schema.Types.ObjectId, ref: 'User', default: null},
    schedule: {type: Schema.Types.ObjectId, ref: 'Schedule', default: null}
})

module.exports = new model('Class', Class)