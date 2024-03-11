const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(cors());
const mongoose = require('mongoose');
const productRoute = require("./route/productRoute")


app.use("/product",productRoute)
//askldjasldkjasldkjaksd
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(process.env.PORT);
        console.log("Connected to db");
    })
})