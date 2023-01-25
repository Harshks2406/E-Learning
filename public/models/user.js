const mongoose = require("mongoose")
const validator = require('validator')

const userSchema = mongoose.Schema({
    stuname: {
        type: String,
        required: true
    },
    stuemail: {
        type: String,
        required: true,
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                window.alert("Invalid Email")
            }
        }
    },
    stupass:{
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