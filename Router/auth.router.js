const express = require ("express");

const loginHandler = require("../controllers/authController")

const loginRouter = express.Router();


loginRouter.route("/")
.post((loginHandler));

module.exports = loginRouter;
