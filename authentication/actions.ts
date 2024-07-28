"use server";

import { cookies } from "next/headers";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./token";

export async function setToken(access: string, refresh: string) {
    cookies().set(ACCESS_TOKEN, access);
    cookies().set(REFRESH_TOKEN, refresh);
}

export async function getAccessToken() {
    const accessToken = cookies().get(ACCESS_TOKEN);
    return accessToken?.value;
}

export async function getRefreshToken() {
    const refreshToken = cookies().get(REFRESH_TOKEN);
    return refreshToken?.value;
}

export async function deleteTokens() {
    cookies().delete(ACCESS_TOKEN);
    cookies().delete(REFRESH_TOKEN);
}
