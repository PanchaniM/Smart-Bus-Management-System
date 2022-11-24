const express = require('express');
let BusRepair = require('../models/busrepair.js')

const router = express.Router()

//add bus repair

router.route("/add").post((req, res ) =>{
    
    const BusNumber = req.body.BusNumber;
    const RepairReason = req.body.RepairReason;
    const RepairDate = req.body.RepairDate;
    const Price = req.body.Price;
    

    const newBusRepair = new BusRepair({
        BusNumber,
        RepairReason,
        RepairDate,
        Price
         
    })

    newBusRepair.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"BusRepair Added Sucessfully"
        })
    })
})

router.route("/").get((req, res) =>{
    BusRepair.find().then((busRepair) =>{
        res.json(busRepair)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    BusNo = req.params.id;
    const {
        BusNumber,
        RepairReason,
        RepairDate,
        Price
    } = req.body;

    const updaterepair ={
        BusNumber,
        RepairReason,
        RepairDate,
        Price
        
    }

    const update = await BusRepair.findByIdAndUpdate(BusNo, updaterepair ).then(() =>{
        res.status(200).send({status:"Repair updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

router.route("get/:id").get(async(req, res) => {
    let BusNumber = res.params.id;
    const repair = await BusRepair.findById(BusNumber).then((repair)=>{
        res.status(200).send({status:"Repair fetched",repair})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let BusNumber = req.params.id;
    const repair = await BusRepair.findByIdAndDelete(BusNumber).then((repair) =>{
        res.status(200).send({status:"sBus repair deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting schedule",err : err.message})
    })
})


module.exports = router;