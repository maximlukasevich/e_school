const {Schema, model} = require('mongoose')

const Lesson = new Schema({
    name: {type: String, required: true, unique: true},
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
})

module.exports = new model('Lesson', Lesson)

