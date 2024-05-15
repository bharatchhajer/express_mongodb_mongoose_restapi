const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

//Model is like a class on which documents are based
const User = mongoose.model('User',userSchema);

module.exports  = User;

