const TOKEN_KEY = 'access_token';
const REFRESH_TOKEN_KEY = 'refresh_token';
const USER = 'user';

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
 **/
const StorageService = {
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  saveToken(accessToken) {
    localStorage.setItem(TOKEN_KEY, accessToken);
  },

  removeToken() {
    localStorage.removeItem(TOKEN_KEY);
  },

  getRefreshToken() {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },

  saveRefreshToken(refreshToken) {
    localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  },

  removeRefreshToken() {
    localStorage.removeItem(REFRESH_TOKEN_KEY);
  },

  getUser() {
    const user = localStorage.getItem(USER);
    return user === null ? undefined : JSON.parse(user);
  },

  saveUser(user) {
    localStorage.setItem(USER, JSON.stringify(user));
  },

  removeUser(user) {
    localStorage.removeItem(USER, user);
  }
};

export { StorageService };
