// Shared types between frontend and backend

export interface ApiResponse<T = any> {
  message: string;
  data: T;
  error?: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
}

// Add more shared types as needed
