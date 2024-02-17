const express = require("express");
const quizzes = require("./db/quizzes");

const app = express();

const PORT = 3000;

app.get("/" , (req,res) => {
    res.send("Hello Geeks !!");
});

app.get("/quiz" , (req,res) => {
    res.send(quizzes);
})

app.listen(process.env.PORT || PORT , () => {
    console.log("Server Started!!")
})