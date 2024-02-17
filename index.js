const express = require("express");
const cors = require ("cors");
const quizRouter = require("./Router/quiz.router");
const userData = require("./db/users");

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
    let arr = userData.users;
    let reqIndex = arr.findIndex((user) => {
        if(user.username === username){
            return true;
        }
    });
    if(reqIndex === -1){
        res.json("User not found");
    }
    else {
        (arr[reqIndex].password === password) ? res.json({username,password,message:"Welcome User!!"}):
        res.json("Incorrect Password !");
    }
})

app.listen(process.env.PORT || PORT , () => {
    console.log("Server Started!!")
})