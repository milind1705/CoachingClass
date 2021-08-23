const express = require('express');
const router = express.Router();
const teacher = require('../controller/teacherController');

router.post('/signup', teacher.Signup);
router.post('/login', teacher.login);
router.get("/", teacher.get_user );

module.exports = router;