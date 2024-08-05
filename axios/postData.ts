import AxiosInstance from "./Axios";
import { accountUrl as postUrl, examUrl } from "./endPoints";

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
    const res = await AxiosInstance.post(postUrl, {
        username,
        email,
        password,
        re_password,
    });

    return res.data;
};

export const login = async ({ username, password }: Props) => {
    const res = await AxiosInstance.post(postUrl + "jwt/create/", {
        username,
        password,
    });

    return res.data;
};

export const reset_password = async (email: string) => {
    const res = await AxiosInstance.post(postUrl + "reset_password/", {
        email,
    });

    return res.data;
};

export const submit_exam = async (selectedchoices: object, examId: string) => {
    const res = await AxiosInstance.post(
        examUrl + `${examId}/send/`,
        selectedchoices
    );

    return res.data;
};

export const refresh_access_token = async (refresh: string) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}` + postUrl + "jwt/refresh/",
        {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                refresh: refresh,
            }),
        }
    );
    return res.json();
};

export const account_activation = async (uid: string, token: string) => {
    const res = await AxiosInstance.post(postUrl + "activation/", {
        uid: uid,
        token: token,
    });

    return res.data;
};

export const finish_lesson = async () => {
    const res = await AxiosInstance.post("", {});
};
