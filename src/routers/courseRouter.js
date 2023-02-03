
const router = require('express').Router()

const courseController = require('../controller/courseController')

router.post('/course',courseController.courseSave)
router.get('/course/:id',courseController.courseGet)
router.get('/course',courseController.courseGetAll)
router.put('/course/:id',courseController.courseUpdate)
router.delete('/course/:id',courseController.courseDelete)

module.exports = router