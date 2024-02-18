const express = require("express");

const {loginHandler} = require("../controllers/authController");
const {signupHandler} = require("../controllers/authController");

const loginRouter = express.Router();
const signupRouter = express.Router();

loginRouter.route("/").post(loginHandler);
signupRouter.route("/").post(signupHandler);

module.exports = { loginRouter, signupRouter };
