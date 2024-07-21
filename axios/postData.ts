import AxiosInstance from "./Axios";

interface Props {
    username?: string;
    email?: string;
    password?: string;
    re_password?: string;
}

export const postUrl = "/accounts/";

export const register = async ({
    username,
    email,
    password,
    re_password,
}: Props) => {
    const request = await AxiosInstance.post(postUrl + "signup/", {
        username,
        email,
        password,
        re_password,
    });
    const data = await request.data;
    return data;
};

export const login = async ({ username, password }: Props) => {
    const request = await AxiosInstance.post(postUrl + "login/", {
        username,
        password,
    });
    const data = await request.data;
    return data;
};

export const reset_password = async (email: string) => {
    const request = await AxiosInstance.post(postUrl + "login/", email);
    const data = await request.data;
    return data;
};
