const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    studentId:{
        type:String,
        required:true,
        trim:true
    },
    name:{
        type:String,
        required:true,
        trim:true
    },
    lastname:{
        type:String,
        required:true,
        trim:true
    }
},
{
    collection:"students",  
    timestamps:true
})

const student = mongoose.model("students",studentSchema)

module.exports = student