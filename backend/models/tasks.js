const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    // IDK if this schema works lol 
    task: [{
        description: {
            type: String
        },
        name: {
            type: String
        }
    }],
    weekly: {
        type: [Number]
    }
}) 

module.exports = mongoose.model('Task', TaskSchema)