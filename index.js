const express = require('express');
const app= express();
const mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var cookieparser= require('cookie-parser');
const jwt = require('jsonwebtoken')


app.use(express.json());

app.use(cookieparser());


const Adminroutes=require('./routes/Admin')
app.use('/api/admin', Adminroutes)


app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"))
// Here



app.get('/', function(req,res){
    res.render(__dirname+"/views/home.ejs")

})

app.get('/login', function(req,res){

    if(req.cookies.accessToken){
        try{
            var isTokenvalid = jwt.verify(req.cookies.accessToken, "Elhemredelcoco$$$$%2323")
            res.redirect('/dashboard');
        }
        catch(error){

        }
    }

    res.render(__dirname+"/views/login.ejs")
        
})

app.set('/dashboard', function(req,res){
    if(req.cookies.accessToken){
        try {
            isTokenvalid=jwt.verify(req.cookies.accessToken,"Elhemredelcoco$$$$%2323")
            console.log(isTokenvalid);
        }
        catch(error){
            res.redirect("/login")
        }
    }
    else{
        res.redirect('/login')
    }

    res.render(__dirname + "/views/dashboard.ejs")
})


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/adminn?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message);
})






app.listen(port, ()=>{
    console.log("Server is Running Successfuly.....")


})
