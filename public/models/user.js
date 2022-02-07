const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        validator(value){
            if(!validator.isEmail(value)){
                window.alert("Invalid Email")
            }
        }
    },
    password:{
        type:String,
        require: true
    },
    occupation: {
        type: String
    },
    image:{
        type:String
    }
})

const User = mongoose.model("User", userSchema)
module.exports = User