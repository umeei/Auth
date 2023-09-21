const router = require('express').Router();
const jwt = require('jsonwebtoken')

router.post('/login' , async function(req, res){

    try{
        var data={username:"admin", password:"admin123"};

        var admindata=req.body;


        if((admindata.username===data.username) && (admindata.password===data.password)){

            var token= jwt.sign({username:"admin"}, "Elhemredelcoco$$$$%2323",{expiresIn:"40s"})

            res.cookie('accessToken',token,{secure:true, httpOnly:true})


            res.json({
                success:true,
                message:"You are logged in Successfuly",
            })
            
        }
        else {
            res.status(404).json({
                success : false,
                message: "Invalid Username or Password"

            })
        }
    }
    catch (error){
        res.status(500).json({
            success:false,
            message:"Soething went Wrong"
        })
    }
})
module.exports=router




























// const adminmodel = require('../Model/Adminm');














// router.get('/',async function(req,res){
//     await adminmodel.create(req.query);
//     res.send("Admin Logged in successfully");

// })
// router.get('/records',async function(req,res){
//     var Admin=await adminmodel.find();
//     res.json(Admin)

// })
// router.delete('/',async function(req,res){
//     await adminmodel.findByIdAndDelete(req.query);
//     res.send("Admin Deleted Successfuly ")
    
// })
// router.put('/',async function(req,res){
//     await adminmodel.findByIdAndUpdate(req.query.id,{$set:req.body});
//     res.send("Admin Updated Successfuly ")

// })


