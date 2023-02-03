const router = require('express').Router()

const courseController = require('../controller/courseController')
const teacherController = require('../controller/teacherController')
const studentController = require('../controller/studentController')


router.post('/course',courseController.courseSave)
router.get('/course/:id',courseController.courseGet)
router.get('/course',courseController.courseGetAll)
router.put('/course/:id',courseController.courseUpdate)
router.delete('/course/:id',courseController.courseDelete)

router.post('/teacher',teacherController.teacherAdd)
router.get('/teacher',teacherController.teacherGetAll)

router.post('/student',studentController.studentAdd)
router.get('/student',studentController.studentGetAll)

module.exports = router