const express = require('express');
const router = express.Router();
const attendance = require('../controller/attendanceController');

router.get('/', attendance.get_allEntries);
router.get('/:id', attendance.get_EntrybyId);
router.post('/', attendance.create_attendanceEntry);
router.put('/:id', attendance.update_attendanceEntry   );
router.delete('/:id', attendance.delete_attendanceEntry);
router.post('/present/:id', attendance.add_presentStudent)

module.exports = router;
