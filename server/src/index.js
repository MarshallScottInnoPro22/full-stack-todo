const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.get("/todos", (req, res) => {
    res.send("Hello World!");
})

app.listen(8080);