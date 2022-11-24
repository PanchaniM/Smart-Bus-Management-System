const express = require('express');
let BusOwner = require('../models/busowner.js')

const router = express.Router()

//pdf genrator and getter
router.route('./busReport').get(async(req, res) => {
    const response = await pdf.create(pdfdata.document,pdfdata.options);
    console.log("ssssssssssss",pdfdata)
    res.send("response");
  });

//GET ONE Owner
router.route("/:id").get((req, res) =>{
    
    const bID = req.params.id;

    Admin.findOne({_id:bID}).then((busowner)=>{  
        if(!busowner){
             return res.status(400).json({msg:"User does not exist"});
        }
        return res.status(200).json({busowner});
     }).catch((err) =>{
         res.status(500).json({msg:"Server Error"});
     })

})


//add owner

router.route("/add").post((req, res ) =>{
    
    const Bid = req.body.Bid;
    const Bname = req.body.Bname;
    const Sname = req.body.Sname;
    const Nic = req.body.Nic;
    const Pnum = Number(req.body.Pnum);
    const Email = req.body.Email;

    const newOwner = new BusOwner({
        Bid,
        Bname,
        Sname,
        Nic,
        Pnum,
        Email 
    })

    newOwner.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Owner Added Sucessfully"
        })
    })
})

router.route("/").get((req, res) =>{
    BusOwner.find().then((add) =>{
        res.json(add)
    }).catch((err)=>{
        console.log(err)
    })
})

//UPDATE Owner
router.route("/update/:id").put(async(req,res)=>{
    adId = req.params.id;
    const {
        Bid,
        Bname,
        Sname,
        Nic,
        Pnum,
        Email 
    } = req.body;

    const updateowner ={
        Bid,
        Bname,
        Sname,
        Nic,
        Pnum,
        Email 
    }

    const update = await BusOwner.findByIdAndUpdate(adId, updateowner ).then(() =>{
        res.status(200).send({status:"owner data updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

router.route("get/:id").get(async(req, res) => {
    let bId = res.params.id;
    const busowner = await BusOwner.findById(bId).then((emp)=>{
        res.status(200).send({status:" fetched",emp})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let bId = req.params.id;
    const busowner = await BusOwner.findByIdAndDelete(bId).then((emp) =>{
        res.status(200).send({status:"Owner removed sucessfully"})
    }).catch((err)=>{S
        console.log(err.message);
        res.status(500).send({status:"Error with removing Owner",err : err.message})
    })
})

module.exports = router;