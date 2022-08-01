const express = require('express');
const router = express.Router();
const objectController = require('../controllers/objectController')

router.get('/', objectController.get);
router.get('/:id', objectController.getById);
router.post('/', objectController.post);
router.put('/:id', objectController.put);
router.delete('/:id', objectController.delete);

module.exports = router;