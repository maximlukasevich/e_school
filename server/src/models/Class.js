const {Schema, model} = require('mongoose')

const Class = new Schema({
    name: {type: String, required: true, unique: true},
    students: [{type: Schema.Types.ObjectId, ref: 'User'}],
    teacher: {type: Schema.Types.ObjectId, ref: 'User'},
    lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
    schedule: {type: Schema.Types.ObjectId, ref: 'Schedule'}
})

module.exports = new model('Class', Class)