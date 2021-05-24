const {Schema, model} = require('mongoose')

const Grades = new Schema({
    lesson: {type: Schema.Types.ObjectId, ref: 'Lesson'},
    student: {type: Schema.Types.ObjectId, ref: 'User'},
    grades: [{
       day: {type: Date, required: true},
       value: {type: Number, required: true}
    }]
})

module.exports = new model('Grades', Grades)