const express = require('express');
const router = express.Router();
const fees = require('../controller/feesController');

//router.get('/', Class.get_class);
router.get('/:id', fees.get_fees_byID);
router.post('/:studentId', fees.create_entry);
router.put('/:id', fees.updateFees);
router.delete('/:id', fees.deleteEntry);

module.exports = router;
