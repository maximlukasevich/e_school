const {Schema, model} = require('mongoose')

const genders = ['Чоловіча', 'Жіноча', undefined]
const roles = ['Учень', 'Батько', 'Вчитель', 'Адмін', undefined]

const User = new Schema({
    name: {
        firstName: {type: String, required: true},
        lastName: {type: String, required: true},
        middleName: {type: String}
    },
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phone: {type: String},
    gender: {type: String, enum: genders, default: undefined},
    address: {
        city: {type: String},
        street: {type: String},
        apartments: {type: String},
        zipCode: {type: String}
    },
    birthday: {type: Date},
    role: {type: String, enum: roles, default: undefined},
    student: {
        userClass: {type: Schema.Types.ObjectId, ref: 'Class'},
        grades: {type: Schema.Types.ObjectId, ref: 'Grades'},
        parents: {
            mother: {type: Schema.Types.ObjectId, ref: 'User'},
            father: {type: Schema.Types.ObjectId, ref: 'User'}
        }
    },
    parent: {
        children: [{type: Schema.Types.ObjectId, ref: 'User'}]
    },
    teacher: {
        lessons: [{type: Schema.Types.ObjectId, ref: 'Lesson'}],
        teacherClass: {type: Schema.Types.ObjectId, ref: 'Class'}
    },
    verified: {
        role: {type: Boolean, default: false},
        email: {type: Boolean, default: false}
    },

})

module.exports = new model('User', User)