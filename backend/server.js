const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

let Admin = require('./models/admin')

//pdf generator parts
const pdfdata = require('./reportgenerator');
var fs = require("fs");
var pdf = require("pdf-creator-node");

 app.use(express.static('public'))

//  app.use('/uploads', express.static(path.resolve(__dirname, './uploads')));

//import Routes
const packageRoutes = require('./routes/packages.js');
const busRouter = require('./routes/bus.js');
const busscheduleRouter = require('./routes/busschedule.js')
const cusRouter = require('./routes/customer.js');
const routeRouter = require('./routes/route.js')
const empRouter = require('./routes/employee.js');
const adminRouter = require('./routes/admin.js');
const bookingRouter = require('./routes/booking.js');
const ownerRouter = require('./routes/busowner.js')
const seatsRouter = require('./routes/seats.js');
const userPackage = require('./routes/userpackage.js');
const busrepair= require('./routes/busrepair.js');
const cardpaymentRouter = require('./routes/cardpayment.js');

//app midleware
app.use(bodyParser.json());
app.use(cors());
app.use("/package", packageRoutes);
app.use("/bus", busRouter);
app.use("/busSchedule", busscheduleRouter);
app.use("/customer", cusRouter);
app.use("/route", routeRouter);
app.use("/admin",adminRouter);
app.use("/employee",empRouter);
app.use("/booking",bookingRouter);
app.use("/seats", seatsRouter);
app.use("/userpackage",userPackage); 
app.use("/busowner",ownerRouter);
app.use("/busRepair", busrepair);
app.use("/cardpayment", cardpaymentRouter);

const PORT = 8000;
// const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';
const DB_URL = 'mongodb+srv://user:user@busapp.1dmsk.mongodb.net/bus?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser :true,
    useUnifiedTopology : true  
})

.then(()=>{
    console.log(`----------------- DB connectd Sucessfully ! -----------------`)
}).catch((err)=>{
    console.log(`DB connection error`, err.message)
})

app.listen(PORT, ()=>{
    console.log(`App is running on port ${PORT}`)
});


//-----------pdf report gen------
// Read HTML Template
var html = fs.readFileSync("./template.html", "utf8");

app.get('/Report',async(req, res) => {
        Admin.find().then(async(test) =>{

            const list = test.map((item)=>{
                const temp = JSON.parse(JSON.stringify(item));
                return temp;
            })
            

            var document = {
                html: html,
                data: {
                  users: list,
                },
                path: "./public/pdf/output.pdf",
                type: "",
              };

            const response = await pdf.create(document,pdfdata.options);
    
            res.send(response);
            

        }).catch((err)=>{
            console.log(err)
        })
    
  })