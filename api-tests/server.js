const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to David's backend application");

});

app.get("/david", (req,res)=>{
    res.send("Hello David!");
});

app.listen(3000,()=>{
    console.log("Listening");
});