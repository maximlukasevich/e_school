const {Schema, model, mongoose} = require('mongoose')
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Lesson = new Schema({
    name: {type: String, required: true},
    slug: {type: String, slug: 'name'},
    teachers: [{type: Schema.Types.ObjectId, ref: 'User'}],
    classes: [{type: Schema.Types.ObjectId, ref: 'Class'}]
})

module.exports = new model('Lesson', Lesson)

