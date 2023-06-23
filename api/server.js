const express = require("express")
const server = express();
require("dotenv").config();

server.get("/hello", (req,res) => {
    res.json({message:"Hello from my server..."})
})

module.exports = server