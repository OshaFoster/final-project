const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");

const port = process.env.PORT || 8008

app.use(bodyParser.json());
app.use(cors());

app.use("/recipes", require("./routes/recipes"));

mongoose.connect("mongodb://localhost/recipes", (err)=>{
    if(err) throw err;
    console.log("connected mongodb")
})

app.listen(port, ()=>{
    console.log(`app is listening${port}`)
})
