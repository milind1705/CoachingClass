const express = require('express');
const router = express.Router();
const student = require('../controller/studentController');

router.get('/', student.get_allStudents);
router.get('/:id', student.get_studentById);
router.post('/', student.create_student);
router.put('/:id', student.update_details);
router.delete('/:id', student.delete_student);

module.exports = router;
