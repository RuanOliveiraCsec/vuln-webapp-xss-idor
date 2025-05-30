const express = require('express')
const app = express();
const porta = 2000;

app.get('/', (req, res) => {
    res.send("test")
});

app.listen(porta, (error) => {
    console.log("status:", error)
});