const express = require('express');
let BusSchedules = require('../models/busschedule.js')

const router = express.Router()

//add schedule

router.route("/add").post((req, res ) =>{
    
    const scheduleId = req.body.scheduleId;
    const RouteId = req.body.RouteId;
    const Route = req.body.Route;
    const Time = req.body.Time;
    const BusNumber = req.body.BusNumber;

    const newBusSchedule = new BusSchedules({
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber 
    })

    newBusSchedule.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"BusSchedule Added Sucessfully"
        })
    })
})

router.route("/").get((req, res) =>{
    BusSchedules.find().then((busShadule) =>{
        res.json(busShadule)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    SchedleId = req.params.id;
    const {
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber 
    } = req.body;

    const updateschedule ={
        scheduleId,
        RouteId,
        Route,
        Time,
        BusNumber 
    }

    const update = await BusSchedules.findByIdAndUpdate(SchedleId, updateschedule ).then(() =>{
        res.status(200).send({status:"schedule updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

router.route("get/:id").get(async(req, res) => {
    let scheduleId = res.params.id;
    const schedule = await BusSchedules.findById(scheduleId).then((schedule)=>{
        res.status(200).send({status:"Schedule fetched",schedule})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let scheduleId = req.params.id;
    const schedule = await BusSchedules.findByIdAndDelete(scheduleId).then((schedule) =>{
        res.status(200).send({status:"scehdule deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting schedule",err : err.message})
    })
})

router.route("/getbyname/:rname").get(async(req,res) => {
    routename = req.params.rname;
    const schedule = await BusSchedules.find({Route:routename}).then((route) =>{
        res.status(200).send({status:"sccssfully fetched by name",route})
    }).catch((err)=>{
        condsple.log(err.message);
        res.status(500).send({status:'err with fetching by name', err: err.message})
    })
})

module.exports = router;