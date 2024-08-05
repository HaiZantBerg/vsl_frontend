import axios from "axios";
import { getAccessToken } from "@/authentication/actions";

const AxiosInstance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_HOST}`,
    timeout: 10000,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

AxiosInstance.interceptors.request.use(
    async (config) => {
        const token = await getAccessToken();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default AxiosInstance;
