const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    teacherId:{
        type:String,
        required:true,
        trim:true
    },
    teacherName:{
        type:String,
        required:true,
        trim:true
    },
    teacherLastname:{
        type:String,
        required:true,
        trim:true
    }
},
{
    collection:"teachers",
    timestamps:true
})

const teacher = mongoose.model("teachers",teacherSchema)

module.exports = teacher