const express = require('express');
let Employee = require('../models/employee.js')

const router = express.Router()

//add Employee

router.route("/add").post((req, res ) =>{
    
    const EmpName = req.body.EmpName;
    const Password = req.body.Password;
    const Email = req.body.Email;
    const Phone = req.body.Phone;
    const NIC = req.body.NIC;
    const Type = req.body.Type;

    const newEmployee = new Employee({
        EmpName,  
        Password,
        Email,
        Phone,
        NIC,
        Type 
    })

    newEmployee.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            sucess:"Employee Added Sucessfully"
        })
    })
})

//RETRIEVE ALL
router.route("/").get((req, res) =>{
    Employee.find().then((emp) =>{
        res.json(emp)
    }).catch((err)=>{
        console.log(err)
    })
})

//UPDATE
router.route("/update/:id").put(async(req,res)=>{
    EmpID = req.params.id;
    const {
        EmpName,
        Password,
        Email,
        Phone,
        NIC,
        Type 
    } = req.body;

    const updateemployee ={
        EmpName,
        Password,
        Email,
        Phone,
        NIC,
        Type 
    }

    const update = await Employee.findByIdAndUpdate(EmpID, updateemployee ).then(() =>{
        res.status(200).send({status:"employee updated sucessfully"})
    }).catch((err)=>{
        console.log(err)
        res.status(500).send({status:"error with updating data", error: err.message})
    })


})

//RETREIVE ONE
router.route("get/:id").get(async(req, res) => {
    let empId = res.params.id;
    const employee = await Employee.findById(empId).then((emp)=>{
        res.status(200).send({status:" fetched",emp})
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status:"Error with get user ", err :err.message})
    })
})

//DELETE
router.route("/delete/:id").delete(async(req, res) =>{
    let empId = req.params.id;
    const employee = await Employee.findByIdAndDelete(empId).then((emp) =>{
        res.status(200).send({status:"Employee deleted sucessfully"})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status:"Error with removing employee",err : err.message})
    })
})

//LOGIN
router.route("/login").post((req, res) => {

    const Email = req.body.Email;
    const Password =req.body.Password;

   Employee.findOne({Email}).then((employee)=>{  
       if(!employee){
            return res.status(400).json({msg:"Employee does not exist"});
       }
       if(employee.Password===Password){
           res.json(employee);
       }
       else{
           res.status(400).json({msg:"Invalid Password"});
       }
        console.log(employee)

    }).catch((err) =>{
        res.status(500).json({msg:"Server Error"});
    })

})


module.exports = router;