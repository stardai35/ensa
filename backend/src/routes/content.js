const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/ContentController');

router.get('/', ContentController.getAll);
router.get('/search', ContentController.search);
router.get('/slug/:slug', ContentController.getBySlug);
router.get('/category/:catId', ContentController.getByCategory);
router.get('/:id', ContentController.getById);
router.post('/', ContentController.create);
router.put('/:id', ContentController.update);
router.delete('/:id', ContentController.delete);

module.exports = router;
