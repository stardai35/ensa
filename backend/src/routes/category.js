const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');

// GET routes
router.get('/', CategoryController.getAll);
router.get('/:id', CategoryController.getById);

// POST/PUT/DELETE
router.post('/', CategoryController.create);
router.put('/:id', CategoryController.update);
router.delete('/:id', CategoryController.delete);

module.exports = router;

