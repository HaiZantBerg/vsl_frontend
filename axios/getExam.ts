import AxiosInstance from "./Axios";

export const getExamData = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);

export const getQuestionData = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/`).then((res) => res.data);
