const express = require('express')
const app = express();
const budget = require("./data.json");
const port = 3000;

app.use("/", express.static("public"));


app.get("/hello", (req,res)=>{
    res.send("Hello World.");
})

app.get("/budget", (req,res)=>{
    res.json(budget);
})

app.listen(port, ()=>{
    console.log("App listening at http://localhost:"+port);
})