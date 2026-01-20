import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { contentAPI, categoryAPI } from '../../api/axiosConfig';
import { authService } from '../../api/authService';
import './AdminDashboard.css';

function AdminDashboard() {
  const [contents, setContents] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();
  const username = authService.getUsername();
  const [formData, setFormData] = useState({
    cat_id: '',
    title_id: '',
    year: '',
    text: '',
    slug: '',
    description: '',
    image: null,
    video: null,
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [contentsRes, categoriesRes] = await Promise.all([
        contentAPI.getAll(),
        categoryAPI.getAll(),
      ]);
      setContents(contentsRes.data);
      setCategories(categoriesRes.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('cat_id', formData.cat_id);
      formDataToSend.append('title_id', formData.title_id);
      formDataToSend.append('year', formData.year);
      formDataToSend.append('text', formData.text);
      formDataToSend.append('slug', formData.slug);
      formDataToSend.append('description', formData.description);
      
      if (formData.image) {
        formDataToSend.append('image', formData.image);
      }
      if (formData.video) {
        formDataToSend.append('video', formData.video);
      }

      if (editingId) {
        await contentAPI.update(editingId, formDataToSend);
        alert('Content updated successfully!');
      } else {
        await contentAPI.create(formDataToSend);
        alert('Content created successfully!');
      }
      setShowForm(false);
      setEditingId(null);
      setFormData({ cat_id: '', title_id: '', year: '', text: '', slug: '', description: '', image: null, video: null });
      fetchData();
    } catch (error) {
      alert('Error saving content: ' + error.message);
    }
  };

  const handleEdit = (content) => {
    setFormData({
      cat_id: content.cat_id,
      title_id: content.title_id,
      year: content.year,
      text: content.text,
      slug: content.slug,
      description: content.description || '',
      image: null,
      video: null,
    });
    setEditingId(content.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this content?')) {
      try {
        await contentAPI.delete(id);
        alert('Content deleted successfully!');
        fetchData();
      } catch (error) {
        alert('Error deleting content: ' + error.message);
      }
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ cat_id: '', title_id: '', year: '', text: '', slug: '', description: '', image: null, video: null });
  };

  const handleLogout = () => {
    authService.logout();
    navigate('/admin/login');
  };

  if (loading) return <div className="admin-dashboard loading">Loading...</div>;

  return (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h1>Admin Dashboard - Content Management</h1>
        <div className="header-actions">
          <span className="username">👤 {username}</span>
          <button
            className="btn btn-primary"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? 'Cancel' : 'Add New Content'}
          </button>
          <button
            className="btn btn-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      {showForm && (
        <div className="form-container">
          <h2>{editingId ? 'Edit Content' : 'Add New Content'}</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select
                  name="cat_id"
                  value={formData.cat_id}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title_id"
                  value={formData.title_id}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Slug</label>
              <input
                type="text"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Description (Short Summary)</label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Ringkasan singkat konten"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>📸 Image Upload (Optional)</label>
                <input
                  type="file"
                  name="image"
                  onChange={handleFileChange}
                  accept="image/*"
                />
                <small>Format: JPEG, PNG, GIF, WEBP | Max: 50MB</small>
              </div>

              <div className="form-group">
                <label>🎬 Video Upload (Optional)</label>
                <input
                  type="file"
                  name="video"
                  onChange={handleFileChange}
                  accept="video/*"
                />
                <small>Format: MP4, WEBM | Max: 50MB</small>
              </div>
            </div>

            <div className="form-group">
              <label>Content Text</label>
              <textarea
                name="text"
                value={formData.text}
                onChange={handleInputChange}
                rows="10"
                required
              ></textarea>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn btn-success">
                {editingId ? 'Update' : 'Create'}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="table-container">
        <h2>Contents List ({contents.length})</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Category</th>
              <th>Year</th>
              <th>Media</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contents.map(content => (
              <tr key={content.id}>
                <td>{content.id}</td>
                <td>{content.title_id}</td>
                <td>{content.category_name || 'N/A'}</td>
                <td>{content.year}</td>
                <td>
                  {content.image_url && <span className="badge-image">📸</span>}
                  {content.video_url && <span className="badge-video">🎬</span>}
                </td>
                <td className="actions">
                  <button
                    className="btn btn-small btn-edit"
                    onClick={() => handleEdit(content)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-small btn-delete"
                    onClick={() => handleDelete(content.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
