import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your base URL https://rokomari-clone-server-beta.vercel.app
});

const useAxiosSecure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const setupInterceptors = async () => {
      try {
        axiosSecure.interceptors.request.use((config) => {
          return config;
        });

        axiosSecure.interceptors.response.use(
          (response) => response,
          async (error) => {
            if (error.response && (error.response.status === 401 || error.response.status === 403)) {
              navigate('/'); // Redirect to the home page
            }
            return Promise.reject(error);
          }
        );
      } catch (err) {
        console.error('Error setting up axios interceptors:', err);
      }
    };

    setupInterceptors();
  }, [navigate]);

  return [axiosSecure];
};

export default useAxiosSecure;