import AxiosInstance from "./Axios";

export const getCommunityData = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/`).then((res) => res.data);
