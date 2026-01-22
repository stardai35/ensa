const pool = require('../config/database');

class Content {
  static async getAll() {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id ORDER BY c.id DESC'
    );
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE c.id = ?',
      [id]
    );
    return rows[0];
  }

  static async getByCategory(catId) {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE c.cat_id = ?',
      [catId]
    );
    return rows;
  }

  static async getBySlug(slug) {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE c.slug = ?',
      [slug]
    );
    return rows[0];
  }

  static async create(data) {
    const { cat_id, title, year, text, slug, image_url, video_url, description } = data;
    const [result] = await pool.query(
      'INSERT INTO content (cat_id, title, year, text, slug, image_url, video_url, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
      [cat_id, title, year, text, slug, image_url || null, video_url || null, description || null]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { cat_id, title, year, text, slug, image_url, video_url, description } = data;
    const [result] = await pool.query(
      'UPDATE content SET cat_id = ?, title = ?, year = ?, text = ?, slug = ?, image_url = ?, video_url = ?, description = ? WHERE id = ?',
      [cat_id, title, year, text, slug, image_url || null, video_url || null, description || null, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM content WHERE id = ?', [id]);
    return result.affectedRows;
  }

  static async search(query) {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE c.title LIKE ? OR c.text LIKE ? OR c.description LIKE ?',
      [`%${query}%`, `%${query}%`, `%${query}%`]
    );
    return rows;
  }

  static async getByMediaType(type) {
    let query = 'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE ';
    
    if (type === 'image') {
      query += 'c.image_url IS NOT NULL';
    } else if (type === 'video') {
      query += 'c.video_url IS NOT NULL';
    } else {
      query += 'c.image_url IS NOT NULL OR c.video_url IS NOT NULL';
    }
    
    const [rows] = await pool.query(query);
    return rows;
  }
}

module.exports = Content;
