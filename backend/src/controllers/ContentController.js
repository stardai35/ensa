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

  static async getByMediaType(req, res) {
    try {
      const { type } = req.params;
      const contents = await Content.getByMediaType(type);
      res.json(contents);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async create(req, res) {
    try {
      const { cat_id, title_id, year, text, slug, description } = req.body;
      
      if (!cat_id || !title_id || !year || !text || !slug) {
        return res.status(400).json({ message: 'Missing required fields' });
      }

      let image_url = null;
      let video_url = null;

      if (req.files && req.files.image) {
        image_url = `/uploads/${req.files.image[0].filename}`;
      }
      if (req.files && req.files.video) {
        video_url = `/uploads/${req.files.video[0].filename}`;
      }

      const id = await Content.create({ 
        cat_id, title_id, year, text, slug, image_url, video_url, description 
      });
      res.status(201).json({ id, message: 'Content created successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async update(req, res) {
    try {
      const { id } = req.params;
      const { cat_id, title_id, year, text, slug, description } = req.body;

      const existing = await Content.getById(id);
      if (!existing) {
        return res.status(404).json({ message: 'Content not found' });
      }

      let image_url = existing.image_url;
      let video_url = existing.video_url;

      if (req.files && req.files.image) {
        image_url = `/uploads/${req.files.image[0].filename}`;
      }
      if (req.files && req.files.video) {
        video_url = `/uploads/${req.files.video[0].filename}`;
      }

      const result = await Content.update(id, { 
        cat_id, title_id, year, text, slug, image_url, video_url, description 
      });
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
