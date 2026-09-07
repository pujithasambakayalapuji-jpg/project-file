const express = require('express');
const mongoose = require('mongoose');
const UserData = require('./model');
const app = express();
app.use(express.json);
mongoose.connect("mongodb://localhost:27017/userDB").then(() =>console.log("database connected")).catch((err) => console.log(err.message))
app.post('/send', async (req,res) => {

    const { username, email,password}=req.body;
      try{
        const Data = new UserData({
        username,
        email,
        password
        });
        await UserData.save();
        return res.json({"message":"Data sent successfully"});
    }
    catch (err){
        console.log(err.message)
    }
});
app.get('/get_data',async(req,res)=>{
    try{
        const data = await UserData.find()
        return res.json({
            message :"getting data...",
            userdata: data
        })
    }
    catch(err){
        console.log(err.message)
    }
})

app.listen(3000, ()=> console.log("server is running...."))