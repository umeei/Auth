const express = require('express');
const app= express();
const mongoose = require('mongoose');
var port = process.env.PORT || 3000;
app.use(express.json());


const Adminroutes=require('./routes/Admin')
app.use('/api/admin', Adminroutes)


app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"))




app.get('/admin_sign_in', function(req,res){
    res.render(__dirname+"/views/login.ejs")

})


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/adminn?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message);
})






app.listen(port, ()=>{
    console.log("Server is Running Successfuly.....")


})
