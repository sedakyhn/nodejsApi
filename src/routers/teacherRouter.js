const router = require('express').Router()

const teacherController = require('../controller/teacherController')

router.post('/teacher',teacherController.teacherAdd)
router.get('/teacher',teacherController.teacherGetAll)

module.exports = router;