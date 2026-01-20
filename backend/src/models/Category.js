const pool = require('../config/database');

class Category {
  static async getAll() {
    const [rows] = await pool.query('SELECT * FROM category');
    return rows;
  }

  static async getById(id) {
    const [rows] = await pool.query('SELECT * FROM category WHERE id = ?', [id]);
    return rows[0];
  }

  static async create(data) {
    const { name, slug } = data;
    const [result] = await pool.query(
      'INSERT INTO category (name, slug) VALUES (?, ?)',
      [name, slug]
    );
    return result.insertId;
  }

  static async update(id, data) {
    const { name, slug } = data;
    const [result] = await pool.query(
      'UPDATE category SET name = ?, slug = ? WHERE id = ?',
      [name, slug, id]
    );
    return result.affectedRows;
  }

  static async delete(id) {
    const [result] = await pool.query('DELETE FROM category WHERE id = ?', [id]);
    return result.affectedRows;
  }
}

module.exports = Category;
