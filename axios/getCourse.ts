import AxiosInstance from "./Axios";

export const getCourseData = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);

export const getCourseDetailData = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/`).then((res) => res.data);
