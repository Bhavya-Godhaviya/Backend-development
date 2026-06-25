const { default: mongoose } = require('mongoose');
const mongooose = require('mongoose');

const userSchema = new mongoose.Schema({
    user: String,
    email: String,
    password: String
})

const userModel = mongoose.Model("user", userSchema)

module.exports =  userModel;