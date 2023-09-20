const router = require('express').Router()
const adminmodel = require('../Model/Adminm');



router.get('/',async function(req,res){
    await adminmodel.create(req.query);
    res.send("Admin Logged in successfully");

})
router.get('/records',async function(req,res){
    var Admin=await adminmodel.find();
    res.json(Admin)

})
// router.delete('/',async function(req,res){
//     await adminmodel.findByIdAndDelete(req.query);
//     res.send("Admin Deleted Successfuly ")
    
// })
// router.put('/',async function(req,res){
//     await adminmodel.findByIdAndUpdate(req.query.id,{$set:req.body});
//     res.send("Admin Updated Successfuly ")

// })



module.exports=router