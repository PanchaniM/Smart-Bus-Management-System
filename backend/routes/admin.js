const express = require('express');
let Admin = require('../models/admin.js')
var fs = require("fs");
var pdf = require("pdf-creator-node");
const pdfdata = require('../reportgenerator');

const router = express.Router()


//pdf genrator and getter
router.route('./adminReport').get(async(req, res) => {
    const response = await pdf.create(pdfdata.document,pdfdata.options);
    console.log("ssssssssssss",pdfdata)
    res.send("response");
  });

//GET ONE ADMINs
router.route("/:id").get((req, res) =>{
    
    const adID = req.params.id;

    Admin.findOne({_id:adID}).then((admin)=>{  
        if(!admin){
             return res.status(400).json({msg:"User does not exist"});
        }
        return res.status(200).json({admin});
     }).catch((err) =>{
         res.status(500).json({msg:"Server Error"});
     })

})


//LOGIN
router.route("/login").post((req, res) => {

    const Email = req.body.Email;
    const Password =req.body.Password;

   Admin.findOne({Email}).then((admin)=>{  
       if(!admin){
            return res.status(400).json({msg:"User does not exist"});
       }
       if(admin.Password===Password){
           res.json(admin);
       }
       else{
           res.status(400).json({msg:"Invalid Password"});
       }
        console.log(admin)

    }).catch((err) =>{
        res.status(500).json({msg:"Server Error"});
    })

})

//add admin

router.route("/add").post((req, res ) =>{
    
    const Name = req.body.Name;
    const Password = req.body.Password;
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone);
    const NIC = Number(req.body.NIC);
    const Type = req.body.Type;

    const newAdmin = new Admin({
        Name,
        Password,
        Email,
        Phone,
        NIC,
        Type 
    })

    newAdmin.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Admin Added Sucessfully"
        })
    })
})
//get all details
router.route("/").get((req, res) =>{
    Admin.find().then((add) =>{
        res.json(add)
    }).catch((err)=>{
        console.log(err)
    })
})

//UPDATE ADMIN
router.route("/update/:id").put(async(req,res)=>{
    adId = req.params.id;
    const {
        Name,
        Password,
        Email,
        Phone,
        NIC,
        Type 
    } = req.body;

    const updateadmin ={
        Name,
        Password,
        Email,
        Phone,
        NIC,
        Type 
    }

    const update = await Admin.findByIdAndUpdate(adId, updateadmin ).then(() =>{
        res.status(200).send({status:"admin data updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

router.route("get/:id").get(async(req, res) => {
    let adId = res.params.id;
    const admin = await Admin.findById(adId).then((emp)=>{
        res.status(200).send({status:" fetched",emp})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let adId = req.params.id;
    const admin = await Admin.findByIdAndDelete(adId).then((emp) =>{
        res.status(200).send({status:"Admin removed sucessfully"})
    }).catch((err)=>{S
        console.log(err.message);
        res.status(500).send({status:"Error with removing admin",err : err.message})
    })
})

module.exports = router;