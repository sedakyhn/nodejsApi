const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    teacherId:{
        type: String,
        ref:'teachers',
        required:true,
        trim: true
    },
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'students',
        required: true,
        trim: true
    } 
},{collection: "courses", timestamps: true})

const course = mongoose.model("courses", courseSchema)

module.exports = course