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
    ...options,
  };
  
  try {
    const response = await fetch(url, defaultOptions);
    
    let data;
    try {
      data = await response.json();
    } catch (jsonError) {
      // If JSON parsing fails, create error object with response text
      const text = await response.text().catch(() => 'Unknown error');
      data = { message: text || 'Invalid response format' };
    }
    
    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }
    
    console.log(`✅ API Success:`, data);
    return data;
    
  } catch (error) {
    console.error(`❌ API Error:`, error);
    // Handle network errors specifically
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
};

export default getApiUrl;