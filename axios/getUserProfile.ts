import AxiosInstance from "./Axios";

export const getUserProfile = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);
