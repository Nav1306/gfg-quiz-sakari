const express = require("express");
const cors = require ("cors");
const quizRouter = require("./Router/quiz.router");
const {loginRouter} = require("./Router/auth.router");
const {signupRouter} = require("./Router/auth.router");
const {authVerify} = require("../controllers/authController")


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/" , (req,res) => {
    res.send("Hello Geeks !!");
});


app.use('/quiz' ,authVerify, quizRouter);

app.use("/auth/login" , loginRouter);
app.use("/auth/signup" , signupRouter);




app.listen(process.env.PORT || PORT , () => {
    console.log("Server Started!!")
})