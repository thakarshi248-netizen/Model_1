const express = require('express');
const path = require('path');
const app = express();

const staticpath = path.join(__dirname,"./Public");
app.use(express.static(staticpath));


app.get("/",(req,res)=>{
    res.send("Home Page.");
});

app.listen(5500);