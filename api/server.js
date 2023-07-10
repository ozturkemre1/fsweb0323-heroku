const express = require("express")
const server = express();
require("dotenv").config();

server.get("/hello", (req,res) => {
    res.json({message:process.env.message || "yokmuş"})
})

module.exports = server