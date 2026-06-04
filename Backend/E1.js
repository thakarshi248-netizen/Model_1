const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

const connect = require('./Database/config.js');
connect();

require('./Database/user.js');
const { user_model } = require("./Database/user.js");

const staticpath = path.join(__dirname, "Public");

app.use(cors());
app.use(express.json());

// Serve Public folder
app.use(express.static(staticpath));

// Route for Static Website
app.use(
    "/website",
    express.static(path.join(__dirname, "Public", "Static_Website"))
);

// Optional: Open index.html directly on /website
app.get("/website", (req, res) => {
    res.sendFile(
        path.join(__dirname, "Public", "Static_Website","Index.html")
    );
});

app.post("/signup", async (req, res) => {
    try {
        const user = new user_model(req.body);
        const result = await user.save();

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await user_model.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get("/demo", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "Basic", "Demo.html"));
});

app.get("/sample", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "Basic", "SAMPLE.html"));
});

app.get("/table", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "Basic", "Table.html"));
});

app.get("/web", (req, res) => {
    res.sendFile(path.join(__dirname, "Public", "Basic", "WEBSITE.html"));
});

app.listen(5500, () => {
    console.log("Server running on port 5500");
});