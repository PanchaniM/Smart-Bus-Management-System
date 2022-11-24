const express = require('express');
let UserPackage = require('../models/userpackage.js')

const router = express.Router();

//GET DATA
router.route("/").get((req, res) =>{
    UserPackage.find().then((add) =>{
        res.json(add)
    }).catch((err)=>{
        console.log(err)
    })
})

//DELETE DATA
router.route("/delete/:id").delete(async(req, res) =>{
    let adId = req.params.id;
    const admin = await UserPackage.findByIdAndDelete(adId).then((emp) =>{
        res.status(200).send({status:"Package removed sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with removing Package",err : err.message})
    })
})

//ADD DATA
router.route("/add").post((req, res ) =>{
    
    const userId = req.body.userId;
    const packageId = req.body.packageId;
    const packageName = req.body.packageName;
    const packageDesc = req.body.packageDesc;
    const packageTime = req.body.packageTime;
    const packageCost = req.body.packageCost;

    const newUPack = new UserPackage({
        userId,
        packageId,
        packageName,
        packageDesc,
        packageTime,
        packageCost,
    })

    newUPack.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Package Added Sucessfully"
        })
    })
})

//Custoemr GET ROUTE
router.route("/:id").get((req, res) =>{
    
    const cusId = req.params.id;

        UserPackage.find({userId:cusId}).then((package)=>{  
        console.log(package);
        return res.status(200).json(package);
             
     }).catch((err) =>{
         res.status(500).json({msg:"Server Error"});
     })

})


module.exports = router;