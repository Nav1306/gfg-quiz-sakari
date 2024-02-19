const express = require("express");
const quizzes = require("../db/quizzes");
const categoryRouter = express.Router();

categoryRouter.route("/")
    .get((req , res) => {
        res.json(quizzes);
    });

    module.exports = categoryRouter;