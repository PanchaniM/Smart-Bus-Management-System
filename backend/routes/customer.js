const express = require('express');
const customer = require('../models/customer.js');
const { findByIdAndUpdate } = require('../models/customer.js');
let Customer = require('../models/customer.js')
let Image = require('../models/cusimage.js')
const multer = require('multer');
const router = express.Router(); 

//IMAGE
const storage = multer.diskStorage({
destination: (req, file, cb) => {
cb(null, "./");},
filename: function(req, file, cb){
const ext = file.mimetype.split("/") [1];
cb(null, `public/${file.originalname}-${Date.now()}.${ext}`);}});
const upload = multer({ storage: storage});

const path = require('path');

router.post("/image/:id", upload.single('image'),(req, res, err) => {

    const cusId = req.params.id;

    if (!req.file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) 
    {
        res.status(400).json({ msg:'Only image files (jpg, jpeg, png) are allowed!'})
    }else
    {
        //IMAGE SET TO DATABASE
        const image = new Image({
            id:cusId,
            image:req.file.filename
        })
        
        //IMAGE SEARCH FOR UPDATE
        Image.findOne({id:cusId}).then((pic)=>{  
            if(!pic){
                //IMAGE EKAK NATHNM SAVE WENWA
                image.save((err) => {
                    if(err){
                        return res.status(400).json({
                            error:err
                        });
                    }
                    return res.status(200).json({
                        success:"Image Added Successfully"
                    })
                })
            }else{
            //UPDATE IMAGE IF ONE EXIST ONE ALREADY
            Image.updateOne({id:cusId}, {$set: {image:req.file.filename}}).then(()=>{  
                return res.status(200).json("Image Added Successfully ");
             }).catch((err) =>{
                 res.status(500).json({msg:"Server Error"});
             })
            }
         }).catch((err) =>{
             res.status(500).json({msg:"Server Error"});
         })

    }
});

//IMAGE GET ROUTE
router.route("/image/:id").get((req, res) =>{
    
    const cusId = req.params.id;

    Image.findOne({id:cusId}).then((image)=>{  
        if(!image){
             return res.status(400).json({msg:"image does not exist"});
        }
        return res.status(200).json({image});
     }).catch((err) =>{
         res.status(500).json({msg:"Server Error"});
     })

})

//LOGIN
router.route("/login").post((req, res) => {

    const Email = req.body.Email;
    const Password =req.body.Password;

   Customer.findOne({Email}).then((customer)=>{  
       if(!customer){
            return res.status(400).json({msg:"User does not exist"});
       }
       if(customer.Password===Password){
           res.json(customer);
       }
       else{
           res.status(400).json({msg:"Invalid Password"});
       }
        console.log(customer)

    }).catch((err) =>{
        res.status(500).json({msg:"Server Error"});
    })

})

//GET ONE CUSOTMER
router.route("/:id").get((req, res) =>{
    
    const cusId = req.params.id;

    Customer.findOne({_id:cusId}).then((customer)=>{  
        if(!customer){
             return res.status(400).json({msg:"User does not exist"});
        }
        return res.status(200).json({customer});
     }).catch((err) =>{
         res.status(500).json({msg:"Server Error"});
     })

})

//ADD

router.route("/add").post((req, res) => {

    const UserName = req.body.UserName;
    const FirstName = req.body.FirstName;
    const LastName = req.body.LastName;
    const Phone = req.body.Phone;
    const Email = req.body.Email;
    const Password =req.body.Password;

    const newcustomer = new customer({
        UserName,
        FirstName,
        LastName,
        Phone,
        Email,
        Password
    })


    
    newcustomer.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Customer Added Successfully "
        })
    })

})

router.route("/").get((req, res) =>{
    Customer.find().then((customermm)=>{
        res.json(customermm)
    }).catch((err) =>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req, res) =>{
    let cusId = req.params.id;
    const {
        UserName,
        FirstName,
        LastName,
        Phone,
        Email,
        Password} = req.body;

    const customId = {
        UserName,
        FirstName,
        LastName,
        Phone,
        Email,
        Password
    }

    const update = await Customer.findByIdAndUpdate(cusId, customId).then(()=>{
        res.status(200).send({status:"Customer Updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating customer details"})
    })
})

router.route("/get/:id").get(async(req, res) =>{
    let cusId = req.params.id;
    const customer = await Customer.findById(cusId).then((cus)=>{
        res.status(200).send({status:"Customer fetched",cus})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"error with retrieving customer", err : err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let cusId = req.params.id;
    const customer = await Customer.findOneAndDelete({_id:cusId}).then((cus)=>{
        res.status(200).send({status:"Customer deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting Customer",err : err.message})
    })
})

module.exports = router;