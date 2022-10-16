const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: [true, 'Must provide a valid username'],
        trim: true,
        // unique: true,
        // validate: {
        //     validator: function(arr) {
        //       return arr.endsWith('@utexas.edu')
        //     },
        //     message: "Error: Username must end with a UT email tag."
        // },
    },
    password:{
        type: String, 
        required: [true, 'must provide a password'],
        minlength: [8, 'Password must be atleast 8 characters long'],
        // other validators will be added eventually
    },
    valid:{
        type: Boolean,
        default: false
    },
    number:{
        type: String,
        required: [true, 'must provide a phone number'],
    },
    tasksCompleted:{
        type: Number,
        default: 0
    },
    tasksDoing: {
        type: [Number],
        default: []
    },
    // selecting - picking tasks
    // lfg - looking for partner
    // fun - middle of task
    state: {
        type: String,
        default: "selecting"
    },
    icon: {
        type: Number,
        default: 0
    },
    major: {
        type: String,
        trim: true,
    },
    interests: {
        type: String,
        trim: true,
    },
    bio: {
        type: String,
        trim: true
    },
    
}) 

module.exports = mongoose.model('User', UserSchema)