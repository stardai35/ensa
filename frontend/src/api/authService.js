// Simple authentication for admin panel
// Default credentials: admin / admin123

const DEFAULT_ADMIN = {
  username: 'admin',
  password: 'admin123',
};

export const authService = {
  login: (username, password) => {
    if (username === DEFAULT_ADMIN.username && password === DEFAULT_ADMIN.password) {
      const token = btoa(`${username}:${password}`);
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminUsername', username);
      return { success: true, token, username };
    }
    return { success: false, error: 'Invalid username or password' };
  },

  logout: () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUsername');
  },

  isAuthenticated: () => {
    return !!localStorage.getItem('adminToken');
  },

  getToken: () => {
    return localStorage.getItem('adminToken');
  },

  getUsername: () => {
    return localStorage.getItem('adminUsername');
  },
};
