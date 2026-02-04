// API Configuration
const getApiUrl = () => {
  // Check if we're in development or production
  const apiUrl = import.meta.env.VITE_API_URL;
  
  if (apiUrl) {
    return apiUrl;
  }
  
  // Fallback logic
  if (import.meta.env.DEV) {
    return 'http://localhost:5000';
  }
  
  // Production fallback - FIXED to point to Render backend
  return 'https://metacryptotrading.onrender.com';
};

// API call wrapper with error handling
export const apiCall = async (endpoint: string, options: RequestInit = {}) => {
  const baseUrl = getApiUrl();
  const url = `${baseUrl}${endpoint}`;
  
  console.log(`🌐 API Call: ${options.method || 'GET'} ${url}`);
  
  const defaultOptions: RequestInit = {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    credentials: 'include',
    ...options,
  };
  
  try {
    const response = await fetch(url, defaultOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    console.log(`✅ API Success:`, data);
    return data;
    
  } catch (error) {
    console.error(`❌ API Error:`, error);
    throw error;
  }
};

export default getApiUrl;