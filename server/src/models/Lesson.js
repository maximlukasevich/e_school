const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Lesson = new mongoose.Schema({
    name: {type: String, required: true},
    slug: {type: String, slug: 'name', unique: true, require: true},
    teachers: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    classes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Class'}]
})

module.exports = new mongoose.model('Lesson', Lesson)

