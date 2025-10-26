import { BACKEND_HEADERS, BACKEND_URL } from "@/lib/constants";
import axios from "axios";

const api = axios.create({
    baseURL: BACKEND_URL,
    headers: BACKEND_HEADERS,
    withCredentials: true,
});

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (!error.response) {
    
        }

        const originalRequest = error.config;

        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            try {
                await api.post('/auth/refresh');
                return api(originalRequest);
            } catch (refreshError) {
                return Promise.reject(refreshError)
            }
        }
        return Promise.reject(error)
    }
);

export default api;