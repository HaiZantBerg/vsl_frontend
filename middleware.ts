import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { refresh_access_token } from "./axios/postData";
import { cookies } from "next/headers";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./authentication/token";

export async function middleware(request: NextRequest) {
    const redirect = NextResponse.redirect(new URL("/login", request.url));
    const isAuthorized = () => {
        if (request.nextUrl.pathname == "/home") {
            return NextResponse.redirect(new URL("/home", request.url));
        }
        return NextResponse.next();
    };
    const accessToken = request.cookies.get(ACCESS_TOKEN)?.value;

    const reqRefresh = async (refreshToken: string | undefined) => {
        if (!refreshToken) {
            return redirect;
        }
        try {
            const res = await refresh_access_token(refreshToken);
            if (res.status === 200) {
                const getCookies = cookies();
                getCookies.set(ACCESS_TOKEN, res.data.access);
                return isAuthorized;
            }
        } catch (err) {
            console.log(err);
            return redirect;
        }
    };

    const isAccessable = async () => {
        if (!accessToken) {
            return redirect;
        }
        const decodedToken = jwtDecode<{ exp: number }>(accessToken);
        const tokenExpiration: number = decodedToken.exp;
        const now = Date.now() / 1000;
        if (tokenExpiration < now - 1000) {
            const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;
            await reqRefresh(refreshToken);
        }
        return isAuthorized;
    };
    return isAccessable().catch((err) => {
        console.log(err);
        return redirect;
    });
}

export const config = {
    matcher: ["/home", "/user", "/courses", "/research-room", "/community"],
};
