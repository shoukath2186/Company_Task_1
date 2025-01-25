
import axios from 'axios';
import { baseURL } from '../../configer';

const axiosInstance = axios.create({
  baseURL: baseURL, 
  timeout: 10000, 
});


axiosInstance.interceptors.request.use(
     
    (config) => {
        return config; // You can modify the request here if needed
      },
      (error) => {
        return Promise.reject(error); // Reject the error
      }

);


axiosInstance.interceptors.response.use(
(response) => {
    return response; // You can modify the response here if needed
  },
  (error) => {
    return Promise.reject(error); // Reject the error
  }
);

export default axiosInstance;
