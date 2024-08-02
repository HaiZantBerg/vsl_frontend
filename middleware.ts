import { NextResponse, NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { refresh_access_token } from "./axios/postData";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./authentication/token";

export async function middleware(request: NextRequest) {
    const check =
        request.nextUrl.pathname === "/login" ||
        request.nextUrl.pathname === "/register";
    if (!check) {
        const accessToken = request.cookies.has(ACCESS_TOKEN);
        const refreshToken = request.cookies.get(REFRESH_TOKEN)?.value;

        const redirect = () => {
            if (check && accessToken) {
                return NextResponse.next();
            }
            if (request.nextUrl.pathname === "/home") {
                return NextResponse.redirect(new URL("/", request.url));
            }
            return NextResponse.redirect(new URL("/login", request.url));
        };

        const isAuthorized = (newAccessToken?: string) => {
            const response = NextResponse.next();
            if (check) {
                return NextResponse.redirect(new URL("/home", request.url));
            }

            if (newAccessToken) {
                const decodedAccessToken = jwtDecode<{ exp: number }>(
                    newAccessToken
                );
                const accessTokenExpiration: number = decodedAccessToken.exp;
                response.cookies.set(ACCESS_TOKEN, newAccessToken, {
                    expires: accessTokenExpiration * 1000,
                    secure: true,
                    httpOnly: true,
                });
            }
            return response;
        };

        const reqRefresh = async (refreshToken: string) => {
            try {
                const res = await refresh_access_token(refreshToken);
                if (res) {
                    return isAuthorized(res.access);
                }
                return redirect();
            } catch (err) {
                return redirect();
            }
        };

        const isAccessable = async () => {
            if (!accessToken) {
                if (!refreshToken) {
                    return redirect();
                }
                return reqRefresh(refreshToken);
            }
            return isAuthorized();
        };
        return await isAccessable().catch(() => {
            return redirect();
        });
    }
    return NextResponse.next();
}

export const config = {
    matcher: [
        "/home",
        "/user",
        "/courses/:path*",
        "/research-room/:path*",
        "/community/:path*",
        "/login",
        "/register",
    ],
};
