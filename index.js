const express = require('express');
const Adminroutes=require('./routes/Admin')
const app= express();
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
app.use(express.json());
app.use('/api/admin', Adminroutes)


app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"))


app.get('/admin_sign_in', function(req,res){
    res.render(__dirname+"./routes/Admin")

})


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/adminn?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message);
})






app.listen(port, ()=>{
    console.log("Server is Running Successfuly.....")


})
