import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contentAPI = {
  getAll: () => api.get('/content'),
  getById: (id) => api.get(`/content/${id}`),
  getBySlug: (slug) => api.get(`/content/slug/${slug}`),
  getByCategory: (catId) => api.get(`/content/category/${catId}`),
  search: (query) => api.get('/content/search', { params: { q: query } }),
  create: (data) => {
    // Support FormData for file uploads
    const config = data instanceof FormData ? { 
      headers: { 'Content-Type': 'multipart/form-data' } 
    } : {};
    return api.post('/content', data, config);
  },
  update: (id, data) => {
    // Support FormData for file uploads
    const config = data instanceof FormData ? { 
      headers: { 'Content-Type': 'multipart/form-data' } 
    } : {};
    return api.put(`/content/${id}`, data, config);
  },
  delete: (id) => api.delete(`/content/${id}`),
};

export const categoryAPI = {
  getAll: () => api.get('/category'),
  getById: (id) => api.get(`/category/${id}`),
  create: (data) => api.post('/category', data),
  update: (id, data) => api.put(`/category/${id}`, data),
  delete: (id) => api.delete(`/category/${id}`),
};

export default api;
