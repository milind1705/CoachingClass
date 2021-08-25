const express = require('express');
const router = express.Router();
const Class = require('../controller/classController');

router.get('/', Class.get_class);
router.get('/:id', Class.get_classById);
router.post('/', Class.create_class);
router.put('/:id', Class.update_class);
router.delete('/:id', Class.delete_class);

module.exports = router;
