import AxiosInstance from "./Axios";
import { postUrl, examUrl } from "./endPoints";

interface Props {
    username?: string;
    email?: string;
    password?: string;
    re_password?: string;
}

export const register = async ({
    username,
    email,
    password,
    re_password,
}: Props) => {
    const res = await AxiosInstance.post(postUrl() + "signup/", {
        username,
        email,
        password,
        re_password,
    });
    const data = await res.data;
    return data;
};

export const login = async ({ username, password }: Props) => {
    const res = await AxiosInstance.post("jwt/create/", {
        username,
        password,
    });
    const data = await res.data;
    return data;
};

export const reset_password = async (email: string) => {
    const res = await AxiosInstance.post(postUrl() + "login/", email);
    const data = await res.data;
    return data;
};

export const submit_exam = async (selectedchoices: object, examId: string) => {
    const res = await AxiosInstance.post(
        examUrl() + `${examId}/send/`,
        selectedchoices
    );
    const data = await res.data;
    return data;
};

export const refresh_access_token = async (token: string) => {
    const res = await AxiosInstance.post("//", token);
    const data = await res.data;
    return data;
};

export const account_activation = async (uid: string, token: string) => {
    const res = await AxiosInstance.post("/users/activation/", {
        uid: uid,
        token: token,
    });
    const data = await res.data;
    return data;
};
