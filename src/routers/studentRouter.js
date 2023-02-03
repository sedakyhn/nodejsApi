const router = require('express').Router()

const studentController = require('../controller/studentController')

router.post('/student',studentController.studentAdd)
router.get('/student',studentController.studentGetAll)

module.exports = router;