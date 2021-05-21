const {Schema, model} = require('mongoose')

const days = ['Понеділок', 'Вівторок', 'Середа', 'Четверг', 'Пятниця']

const Schedule = new Schema({
    scheduleClass: {type: Schema.Types.ObjectId, ref: 'Class', require: true},
    lessons: [{
        day: {type: String, enum: days},
        number: {type: Number, require: true},
        lesson: {type: Schema.Types.ObjectId, ref: 'Lesson'}
    }]
})

module.exports = new model('Schedule', Schedule)