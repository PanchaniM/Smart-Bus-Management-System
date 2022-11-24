const express = require('express');
let Package = require('../models/packages.js');

const router = express.Router(); 

//Add(create) Package

router.route("/add").post((req, res) => {



    const name = req.body.name;
    const description = req.body.description;
    const trips_count = Number(req.body.trips_count);
    const time_period = Number(req.body.time_period);
    const price = Number(req.body.price);

    const newPackage = new Package({
        name,
        description,
        trips_count,
        time_period,
        price
    })


    
    newPackage.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"Package Added Successfully "
        })
    })

})


//retrieve package

router.route("/").get((req, res) =>{
    Package.find().then((packages)=>{
        res.json(packages)
    }).catch((err)=>{
        console.log(err)
    })
})

//update package

router.route("/update/:id").put(async(req, res) =>{
    let packageId = req.params.id;
    const {name, description, trips_count, time_period, price} = req.body;

    const updatePackages = {
        name,
        description,
        trips_count,
        time_period,
        price
    }

    const updadte =await Package.findByIdAndUpdate(packageId, updatePackages).then(()=>{
        res.status(200).send({status:"Package updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })
})

router.route("/get/:id").get(async(req,res)=>{
    let packageId = req.params.id;
    const package = await Package.findById(packageId).then((package)=>{
        res.status(200).send({status:"Package fetched",package})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user", err : err.message})
    })
})



//delete package

router.route("/delete/:id").delete(async(req, res) =>{
    let packageId = req.params.id;
    const package = await Package.findByIdAndDelete(packageId).then((package) =>{
        res.status(200).send({status:"Package deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with deleting package",err : err.message})
    })
})

module.exports = router;