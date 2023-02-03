const { response } = require('express')
const student = require('../models/studentModel')

const studentAdd = async (req, res) =>{
    try {
        const studentAdd = new student(req.body)
        await studentAdd.save()
        .then(()=>{
            return res.status(201).json(studentAdd)
        })
        .catch((err) =>{
            return res.status(400).json({
                success:false,
                message:"Kayıt Oluşturulurken Hata Çıktı : " + err
            })
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Kayıt Oluşturulamadı !"
        })
    }
    console.log(req.body)
}
const studentGetAll = async (req, res) => {
    try {
        const result = await student.find({})
        if (result.length > 0) {
            return res.status(200).json({
                success: true,
                data: result
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Kayıtlar Getirilemedi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Getirilemedi !" + error
        })
    }
}

module.exports = {
    studentAdd,
    studentGetAll
}