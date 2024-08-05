import AxiosInstance from "./Axios";

export const getExamData = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);

export const getQuestionData = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/`).then((res) => res.data);

export const getExamResult = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/send/`).then((res) => res.data);

export const getLessonsData = (url: string) =>
    AxiosInstance.get(url).then((res) => res.data);

export const getLessonData = (url: string, id: string) =>
    AxiosInstance.get(url + `${id}/`).then((res) => res.data);
