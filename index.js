const express = require("express");
const cors = require ("cors");
const quizRouter = require("./Router/quiz.router");
const userData = require("./db/users");
const {jwt} = require("jsonwebtoken")

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/" , (req,res) => {
    res.send("Hello Geeks !!");
});


app.use('/quiz' , quizRouter);

app.post("/auth/login" , (req,res) => {
    const {username,password} = req.body;
    const isUserVerified = userData.users.some(user=>user.username === username && user.password === password);
    if(isUserVerified){
        const token = jwt.sign({id:username},process.env.SECRET_TOKEN);
        res.json({username, token, message:"User Verified"})
    }else {
        res.status(401).json({message: "Invalid Credentials"})
    }
})

app.listen(process.env.PORT || PORT , () => {
    console.log("Server Started!!")
})