const Content = require('../models/Content');
const Category = require('../models/Category');

class ContentController {
  static async getAll(req, res) {
    try {
      const contents = await Content.getAll();
      res.json(contents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getById(req, res) {
    try {
      const { id } = req.params;
      const content = await Content.getById(id);
      if (!content) {
        return res.status(404).json({ message: 'Content not found' });
      }
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBySlug(req, res) {
    try {
      const { slug } = req.params;
      const content = await Content.getBySlug(slug);
      if (!content) {
        return res.status(404).json({ message: 'Content not found' });
      }
      res.json(content);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getByCategory(req, res) {
    try {
      const { catId } = req.params;
      const contents = await Content.getByCategory(catId);
      res.json(contents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { cat_id, title_id, year, text, slug } = req.body;
      
      if (!cat_id || !title_id || !year || !text || !slug) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      const id = await Content.create({ cat_id, title_id, year, text, slug });
      res.status(201).json({ id, message: 'Content created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { cat_id, title_id, year, text, slug } = req.body;

      const result = await Content.update(id, { cat_id, title_id, year, text, slug });
      if (result === 0) {
        return res.status(404).json({ message: 'Content not found' });
      }
      res.json({ message: 'Content updated successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async delete(req, res) {
    try {
      const { id } = req.params;
      const result = await Content.delete(id);
      if (result === 0) {
        return res.status(404).json({ message: 'Content not found' });
      }
      res.json({ message: 'Content deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async search(req, res) {
    try {
      const { q } = req.query;
      if (!q) {
        return res.status(400).json({ message: 'Search query required' });
      }
      const results = await Content.search(q);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ContentController;
