const mongoose=require('mongoose');
const adminmodel=mongoose.model('Admin',new mongoose.Schema(
    {
        "Email":String,
        "Password":String,
    }
))

module.exports =adminmodel