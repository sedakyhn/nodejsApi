const { response } = require('express')
const course = require('../models/coursesModel')

const courseSave = async (req, res) => {
    try {
        const courseSave = new course(req.body)
        await courseSave.save()
            .then(() => {
                return res.status(201).json(courseSave)
            })
            .catch((err) => {
                return res.status(400).json({
                    success: false,
                    message: "Kayıt Oluşturulurken Hata Çıktı : " + err
                })
            })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Kayıt Oluşturulamadı !"
        })
    }
    console.log(req.body)
}

const courseGet = async (req, res) => {
    try {
        const Id = req.params.id
        const result = await course.find({ _id: Id }).populate({ path: 'studentId', model: 'students' }).populate({ path: 'teacherId', model: 'teachers' })
        if (result != null) {
            return res.status(200).json({
                success: true,
                data: result
            })
        }
        else {
            return res.status(400).json({
                success: false,
                message: "Kayıt Getirilemedi"
            })
        }

    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Kayıt Getirilemedi !" + error
        })
    }
    
}

const courseGetAll = async (req, res) => {
    const { page } = req.query
    const limit = 10
    const skip = Number(page - 1) * limit
    try {
        const result = await course.find({}).populate('studentId').limit(limit).skip(skip)
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
const courseUpdate = async (req, res) => {
    const { id } = req.params;
    try {
        const courseUpdate = await Ogrenci.findByIdAndUpdate(id, req.body)
        if (courseUpdate) {
            return res.status(200).json({
                success: true,
                data: courseUpdate
            })
        }
        else {
            return res.status(400).json({
                success: true,
                message: "Kayıt Güncellendi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Getirilemedi !" + error
        })
    }
}
const courseDelete = async (req, res) => {
    const { id } = req.params;
    try {
        const courseDelete = await Ogrenci.findByIdAndDelete(id)
        if (ogrenciDelete) {
            return res.status(200).json({
                success: true,
                data: courseDelete
            })
        }
        else {
            return res.status(400).json({
                success: true,
                message: "Kayıt Silinemedi"
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Kayıt Silinemedi !" + error
        })
    }
}

module.exports = {
    courseSave,
    courseGet,
    courseGetAll,
    courseUpdate,
    courseDelete
}