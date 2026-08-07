const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    // iski 2 values hongi
    role: {
        type: String,
        // enum btata h, dono me se ek value hogi
        enum: [ 'user', 'artist'],
        // default user rhega
        default: 'user',
    }
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel