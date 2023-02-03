const { response } = require('express')
const teacher = require('../models/teacherModel')

const teacherAdd = async (req, res) =>{
    try {
        const teacherAdd = new teacher(req.body)
        await teacherAdd.save()
        .then(()=>{
            return res.status(201).json(teacherAdd)
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
const teacherGetAll = async (req, res) => {
    try {
        const result = await teacher.find({})
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
    teacherAdd,
    teacherGetAll
}