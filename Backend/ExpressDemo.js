import express from 'express';
const app = express();

app.get("/",(req,res)=>{  
    res.send("Welcome in Express Page!");
});

app.get("/about",(req,res)=>{
    res.send("Welcome in About Page.");
});

app.get("/home",(req,res)=>{
    res.send("Welcome in Home Page.");
});

app.get("/gallery",(req,res)=>{
    res.send("Welcome in Gallery Page.");
});

app.listen(5500);