const {Schema, model} = require('mongoose')

const Grades = new Schema({
    lesson: {type: Schema.Types.ObjectId, ref: 'Lesson'},
    grades: [{
       day: {type: Date, required: true},
       value: {type: Number, required: true}
    }]
})

module.exports = new model('Grades', Grades)