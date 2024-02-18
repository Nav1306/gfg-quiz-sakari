const express = require("express");
const cors = require ("cors");
const quizRouter = require("./Router/quiz.router");
const {loginRouter} = require("./Router/auth.router");
const {signupRouter} = require("./Router/auth.router");
const pageNotFound = require("./middleware/pageNotFound");


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/" , (req,res) => {
    res.send("Hello Geeks !!");
});


app.use('/quiz' , quizRouter);
app.use("/auth/login" , loginRouter);
app.use("/auth/signup" , signupRouter);
app.use(pageNotFound);




app.listen(process.env.PORT || PORT , () => {
    console.log("Server Started!!")
})