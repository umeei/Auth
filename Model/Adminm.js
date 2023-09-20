const mongoose=require('mongoose');
const adminmodel=mongoose.model('Admin',new mongoose.Schema(
    {
        "username":String,
        "password":String,
    }
))

module.exports =adminmodel