const express = require('express');
const Adminroutes=require('./routes/Admin')
const app= express();
const port=1500;
const mongoose = require('mongoose');
app.use(express.json());

app.use('/api/admin', Adminroutes)


mongoose.connect("mongodb+srv://umairjutt2025:umairjutt2025@umair-cluster.oducycs.mongodb.net/adminn?retryWrites=true&w=majority").then((res)=>{
    console.log("DataBase is connected");
}).catch((e)=>{
    console.log(e.message);
})






app.listen(port, ()=>{
    console.log("Server is Running Successfuly.....")


})
