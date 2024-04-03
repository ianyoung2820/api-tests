const express = require('express');
const app = express();

app.get("/", (req,res)=>{
    res.send("Welcome to Ian's backend application");

});

app.get("/ian", (req,res)=>{
    res.send("Hello Ian!");
});

app.listen(3000,()=>{
    console.log("Listening");
});