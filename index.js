const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path")

const port = process.env.PORT || 8008

app.use(bodyParser.json());
app.use(cors());

app.use("/recipes", require("./routes/recipes"));
app.use(express.static(path.join(__dirname,"client", "build")))
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/recipes", (err)=>{
    if(err) throw err;
    console.log("connected mongodb")
})
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "client", "index.html"))
});
app.listen(...)
app.listen(port, ()=>{
    console.log(`app is listening${port}`)
})
