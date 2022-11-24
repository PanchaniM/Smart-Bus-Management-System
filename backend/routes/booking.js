const express = require('express');
const booking = require('../models/booking.js');
const schedules = require('../models/busschedule.js')

const router = express.Router();




//GET DATA BY ID
router.route("/:id").get((req, res)=>{
    //GET SEATS FUNC
    function getseat(list){
        return list.map((seats)=>{
            let array = [];
            for (const [key, value] of Object.entries(seats)) {
                if(key!="uId" && key !="busId"){
                    if(value){
                        array.push({key,value})
                    }
                }
            
            }
            return array;
            
        })
    }

    const cusId = req.params.id;
        booking.find({uId:cusId}).then((book) =>{     
            res.json(getseat(JSON.parse(JSON.stringify(book))))
        }).catch((err)=>{   
            console.log(err)
        })
});

//GET DATA
router.route("/").get((req, res) =>{
    booking.find().then((add) =>{
        res.json(add)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/delete/:id").delete(async(req, res) =>{
    let adId = req.params.id;
    const admin = await booking.findByIdAndDelete(adId).then((emp) =>{
        res.status(200).send({status:"Booking removed sucessfully"})
    }).catch((err)=>{S
        console.log(err.message);
        res.status(500).send({status:"Error with removing admin",err : err.message})
    })
})

router.route("/add").post((req, res) =>{
    const busId =  req.body.busId;
    const uId = req.body.uId;
    const seat1 = Boolean(req.body.seat1)
    const seat2 = Boolean(req.body.seat2)
    const seat3 = Boolean(req.body.seat3)
    const seat4 = Boolean(req.body.seat4)
    const seat5 = Boolean(req.body.seat5)
    const seat6 = Boolean(req.body.seat6)
    const seat7 = Boolean(req.body.seat7)
    const seat8 = Boolean(req.body.seat8)
    const seat9 = Boolean(req.body.seat9)
    const seat10 = Boolean(req.body.seat10)
    //

    const seat11 = Boolean(req.body.seat11)
    const seat12 = Boolean(req.body.seat12)
    const seat13 = Boolean(req.body.seat13)
    const seat14 = Boolean(req.body.seat14)
    const seat15 = Boolean(req.body.seat15)
    const seat16 = Boolean(req.body.seat16)
    const seat17 = Boolean(req.body.seat17)
    const seat18 = Boolean(req.body.seat18)
    const seat19 = Boolean(req.body.seat19)
    const seat20 = Boolean(req.body.seat20)
    //
    const seat21 = Boolean(req.body.seat21)
    const seat22 = Boolean(req.body.seat22)
    const seat23 = Boolean(req.body.seat23)
    const seat24 = Boolean(req.body.seat24)
    const seat25 = Boolean(req.body.seat25)
    const seat26 = Boolean(req.body.seat26)
    const seat27 = Boolean(req.body.seat27)
    const seat28 = Boolean(req.body.seat28)
    const seat29 = Boolean(req.body.seat29)
    const seat30 = Boolean(req.body.seat30)
    //
    const seat31 = Boolean(req.body.seat31)
    const seat32 = Boolean(req.body.seat32)
    const seat33 = Boolean(req.body.seat33)
    const seat34 = Boolean(req.body.seat34)
    const seat35 = Boolean(req.body.seat35)
    const seat36 = Boolean(req.body.seat36)
    const seat37 = Boolean(req.body.seat37)
    const seat38 = Boolean(req.body.seat38)
    const seat39 = Boolean(req.body.seat39)
    const seat40 = Boolean(req.body.seat40)
    //
    const seat41 = Boolean(req.body.seat41)
    const seat42 = Boolean(req.body.seat42)
    const seat43 = Boolean(req.body.seat43)
    const seat44 = Boolean(req.body.seat44)
    const seat45 = Boolean(req.body.seat45)
    const seat46 = Boolean(req.body.seat46)
    const seat47 = Boolean(req.body.seat47)
    const seat48 = Boolean(req.body.seat48)
    const seat49 = Boolean(req.body.seat49)
    const seat50 = Boolean(req.body.seat50)

    

    const newSeats = new booking({
        uId,
        busId,
        seat1, 
        seat2,
        seat3,  
        seat4,  
        seat5,  
        seat6,  
        seat7, 
        seat8,  
        seat9,  
        seat10,  
        seat11, 
        seat12,  
        seat13, 
        seat14,
        seat15,  
        seat16,  
        seat17,  
        seat18,  
        seat19,  
        seat20,  
        seat21,  
        seat22,  
        seat23, 
        seat24,  
        seat25,  
        seat26,  
        seat27,  
        seat28,  
        seat29,  
        seat30,  
        seat31,  
        seat32,  
        seat33,  
        seat34,  
        seat35,  
        seat36,  
        seat37,  
        seat38, 
        seat39,  
        seat40,  
        seat41,  
        seat42,  
        seat43,  
        seat44,  
        seat45,  
        seat46, 
        seat47,  
        seat48,  
        seat49,  
        seat50
    
    
        

    })

    newSeats.save((err) => {
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"booked successfully"
        })
    })
})

module.exports = router;