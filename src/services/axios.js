import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Replace with your API base URL
    timeout: 10000, // Set a timeout for requests
});

// Request interceptor
instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        console.log('Request:', config);
        return config;
    },
    (error) => {
        console.error('Request Error:', error);
        return Promise.reject(error);
    }
);

// Response interceptor
instance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('Response Error:', error.response.data);
            if (error.response.status === 401) {
                // Unauthorized, for example, redirect to login
            } else if (error.response.status === 403) {
                // Forbidden, handle accordingly
            }
        } else if (error.request) {
            console.error('No Response:', error.request);
        } else {
            console.error('Error:', error.message);
        }

        return Promise.reject(error);
    }
);

export default instance;
