const jwt = require("jsonwebtoken");
const userData = require("../db/users");
const {v4:uuid} = require("uuid");

//creating a middleware to verify the token
const authVerify = (req,res,next) => {
    const token = req.headers.authorization;
    try{
        const decodedToken = jwt.verify(token,process.env.SECRET_TOKEN);
        req.user = {userID:decodedToken.id};
        return next();
    }catch(err){
      console.error(`error from server ${JSON.stringify(err)}`)
    }
}

const loginHandler = (req, res) => {
  const { username, password } = req.body;
  const isUserVerified = userData.users.some(
    (user) => user.username === username && user.password === password
  );
  if (isUserVerified) {
    const token = jwt.sign({ id: username }, process.env.SECRET_TOKEN);
    res.json({ username, token, message: "User Verified" });
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};

const signupHandler = (req,res) => {
    const {username , password} = req.body;
    const isUserPresent = userData.users.some((user) => {
      if(user.username === username){
        return true;
      } 
    });
    if(isUserPresent){
      res.json("User Already Exists !!")
    }
    else {
      let newUser = {id:uuid(),username,password};
      userData.users = [...userData.users,newUser];
      const token = jwt.sign({id:username},process.env.SECRET_TOKEN)
      res.json({username,token,password,message:"User Added!"});
    }
};

module.exports = {loginHandler,signupHandler,authVerify};
