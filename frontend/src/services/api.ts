/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error.response?.data || error.message);
    return Promise.reject(error);
  }
);

/**
 * Fetches list of available screenshot filenames from the backend
 * @returns Promise containing array of screenshot filenames
 */
export const getScreenshots = async (): Promise<string[]> => {
  const response = await apiClient.get<{ screenshots: string[] }>('/screenshots');
  return response.data.screenshots;
};

export default apiClient;
