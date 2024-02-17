const express = require("express");
const quizzes = require("../db/quizzes");
const quizRouter = express.Router();


quizRouter.get("/" , (req,res) => {
    res.json(quizzes.data);
})

module.exports = quizRouter;