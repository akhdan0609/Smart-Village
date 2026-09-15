// Admin authentication storage utilities

export interface AdminAuthData {
  id: string;
  username: string;
  email: string;
  token?: string;
  timestamp?: number;
}

/**
 * Get admin authentication data from localStorage
 */
export const getAdminAuth = (): AdminAuthData | null => {
  try {
    const adminData = localStorage.getItem('adminAuth');
    return adminData ? JSON.parse(adminData) : null;
  } catch (error) {
    console.error('Error reading admin auth data:', error);
    return null;
  }
};

/**
 * Set admin authentication data to localStorage
 */
export const setAdminAuth = (data: AdminAuthData | null): void => {
  try {
    if (data === null) {
      localStorage.removeItem('adminAuth');
    } else {
      localStorage.setItem('adminAuth', JSON.stringify(data));
    }
  } catch (error) {
    console.error('Error saving admin auth data:', error);
  }
};

/**
 * Clear admin authentication data
 */
export const clearAdminAuth = (): void => {
  setAdminAuth(null);
};

/**
 * Check if admin is authenticated
 */
export const isAdminAuthenticated = (): boolean => {
  return getAdminAuth() !== null;
};

/**
 * Save a surat request to localStorage
 */
export const saveSuratRequest = (request: object): void => {
  try {
    const existingRequests = localStorage.getItem('suratRequests');
    const requests = existingRequests ? JSON.parse(existingRequests) : [];

    requests.push(request);

    localStorage.setItem('suratRequests', JSON.stringify(requests));
  } catch (error) {
    console.error('Error saving surat request:', error);
  }
};