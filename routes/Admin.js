const router = require('express').Router()
const adminmodel = require('../Model/Adminm');
const Admin =require('../Model/Adminm')


router.get('/',async function(req,res){
    await adminmodel.create(req.body);
    res.send("Admin Logged in successfully");

})
router.post('/',async function(req,res){
    var ad=await adminmodel.find();
    res.json(Admin)

})
router.delete('/',async function(req,res){
    await adminmodel.findByIdAndDelete();
    res.send("Admin Deleted Successfuly ")
    
})
router.put('/',async function(req,res){
    await adminmodel.findByIdAndUpdate();
    res.send("Admin Updated Successfuly ")

})



module.exports=router