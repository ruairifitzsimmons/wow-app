const mongoose = require('mongoose')

const classSchema = new mongoose.Schema({
    class: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    specs: {
        type: Array
    }
})

module.exports = mongoose.model('Class', classSchema)