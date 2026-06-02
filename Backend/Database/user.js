const mongoose = require("mongoose");

const user_schema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String
});

const user_model = mongoose.model("Users", user_schema);

module.exports = {
    user_schema,
    user_model
};