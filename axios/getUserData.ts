import AxiosInstance from "./Axios";

export const getUserData = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);
