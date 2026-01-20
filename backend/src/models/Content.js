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
    const { cat_id, title_id, year, text, slug } = data;
    const [result] = await pool.query(
      'INSERT INTO content (cat_id, title_id, year, text, slug) VALUES (?, ?, ?, ?, ?)',
      [cat_id, title_id, year, text, slug]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { cat_id, title_id, year, text, slug } = data;
    const [result] = await pool.query(
      'UPDATE content SET cat_id = ?, title_id = ?, year = ?, text = ?, slug = ? WHERE id = ?',
      [cat_id, title_id, year, text, slug, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM content WHERE id = ?', [id]);
    return result.affectedRows;
  }

  static async search(query) {
    const [rows] = await pool.query(
      'SELECT c.*, cat.name as category_name FROM content c LEFT JOIN category cat ON c.cat_id = cat.id WHERE c.title_id LIKE ? OR c.text LIKE ?',
      [`%${query}%`, `%${query}%`]
    );
    return rows;
  }
}

module.exports = Content;
