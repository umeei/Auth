const express = require('express');
const app= express();
const mongoose = require('mongoose');
var port = process.env.PORT || 3000;
app.use(express.json());


const Adminroutes=require('./routes/Admin')
app.use('/api/admin', Adminroutes)


app.set('view engine', 'ejs');
app.use(express.static(__dirname+"/public"))
// Here



app.get('/admin_sign_in', function(req,res){
    res.render(__dirname+"/views/login.ejs")

})

app.set('/login', function(req,res){

    if(req.cookies.accessToken){
        try{
            var isTokenvalid = jwt.verify(req.cookie.accessToken, "Elhemredelcoco$$$$%2323")
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
            isTokenvalid=jwt.verify(req.cookie.accessToken,"Elhemredelcoco$$$$%2323")
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
