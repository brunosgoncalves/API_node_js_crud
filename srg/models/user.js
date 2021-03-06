const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true,
        select:false,
    },
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const User = mongoose.model('user',UserSchema);

module.exports = User;

