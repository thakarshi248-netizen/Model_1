const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const connect = require('./Database/config.js');
connect();

require('./Database/user.js');
const { user_model } = require("./Database/user.js");

const staticpath = path.join(__dirname, "./Public");

app.use(cors());
app.use(express.json()); // <-- FIXED
app.use(express.static(staticpath));

app.post("/signup", async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const user = new user_model(req.body);
        const result = await user.save();

        console.log(result);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(5500, () => {
    console.log("Server running on port 5500");
});