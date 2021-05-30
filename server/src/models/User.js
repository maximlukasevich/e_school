const {Schema, model} = require('mongoose')

const genders = ['Чоловіча', 'Жіноча', undefined]
const roles = ['Учень', 'Батько', 'Вчитель', 'Адмін', undefined]
const options = {discriminatorKey: 'kind'}

const User = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    middleName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String, default: ''},
    gender: {type: String, enum: genders, default: undefined},
    city: {type: String, default: ''},
    street: {type: String, default: ''},
    apartments: {type: String, default: ''},
    zipCode: {type: String, default: ''},
    role: {type: String, enum: roles, default: undefined},
    verifiedRole: {type: Boolean, default: false},
    verifiedEmail: {type: Boolean, default: false},
}, options)

const Parent = new Schema({
    children: [{type: Schema.Types.ObjectId, ref: 'User'}]
}, options)

const Teacher = new Schema({
    lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
    teacherClass: {type: Schema.Types.ObjectId, ref: 'Class'}
}, options)

const Student = new Schema({
    userClass: {type: Schema.Types.ObjectId, ref: 'Class'},
    grades: [{type: Schema.Types.ObjectId, ref: 'Grades'}],
    mother: {type: Schema.Types.ObjectId, ref: 'User'},
    father: {type: Schema.Types.ObjectId, ref: 'User'}
}, options)

module.exports = {
    User: new model('User', User),
    Teacher: model('User', User).discriminator('Teacher', Teacher),
    Parent: model('User', User).discriminator('Parent', Parent),
    Student: model('User', User).discriminator('Student', Student)
}

