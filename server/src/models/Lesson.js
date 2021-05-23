const {Schema, model} = require('mongoose')

const Lesson = new Schema({
    name: {type: String, required: true},
    slug: {type: String, required: true},
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    classes: [{type: Schema.Types.ObjectId, ref: 'Class'}]
})

module.exports = new model('Lesson', Lesson)

