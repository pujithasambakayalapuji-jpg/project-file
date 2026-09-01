const mongoose = require('mongoose');
const userDB = mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:string,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    CreatedAt:{
        type:Date,
        default: Date.now
    }
})
 module.exports = mongoose.model("userdata",UserData)