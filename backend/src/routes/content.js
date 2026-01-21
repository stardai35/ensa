const express = require('express');
const router = express.Router();
const ContentController = require('../controllers/ContentController');
const upload = require('../config/multer');

// Special routes MUST be before parameterized routes
router.get('/search', ContentController.search);
router.get('/media/:type', ContentController.getByMediaType);

// Parameterized routes
router.get('/slug/:slug', ContentController.getBySlug);
router.get('/category/:catId', ContentController.getByCategory);
router.get('/:id', ContentController.getById);
router.get('/', ContentController.getAll);

// POST/PUT/DELETE
router.post('/', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), ContentController.create);
router.put('/:id', upload.fields([{ name: 'image', maxCount: 1 }, { name: 'video', maxCount: 1 }]), ContentController.update);
router.delete('/:id', ContentController.delete);

module.exports = router;
