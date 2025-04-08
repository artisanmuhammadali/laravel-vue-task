import axios from 'axios';

axios.defaults.withXSRFToken = true;
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

// Get user token from local storage
const token = localStorage.getItem('token');

// Set authorization header with token
if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default axios;
