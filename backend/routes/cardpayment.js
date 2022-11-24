const express = require('express')
let cardayment = require('../models/cardpayment.js')

const router = express.Router()

router.route('/add').post((req, res) => {
    const uId = req.body.uId;
    const scheduleId = req.body.scheduleId;
    const name = req.body.name;
    const cardNumber = req.body.cardNumber;
    const expMonth = req.body.expMonth;
    const expDate = req.body.expDate;
    const ccv = req.body.ccv;

    const newCardPayment = new cardayment({
        uId,
        scheduleId,
        name,
        cardNumber,
        expMonth,
        expDate,
        ccv

    })

    newCardPayment.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"newCardPayment Added Sucessfully"
        })
    })
})
module.exports = router;