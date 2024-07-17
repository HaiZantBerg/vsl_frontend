import { apislice } from "../services/apislice";

interface User {
    username: string;
    email: string;
}

interface socialAuthArgs {
    provider: string;
    state: string;
    code: string;
}

interface CreateUserResponse {
    success: boolean;
    user: User;
}

const authApiSlice = apislice.injectEndpoints({
    endpoints: (builder) => ({
        retrieveUser: builder.query<User, void>({
            query: () => "/accounts/",
        }),
        socialAuthenticate: builder.mutation<
            CreateUserResponse,
            socialAuthArgs
        >({
            query: ({ provider, state, code }) => ({
                url: `/o/${provider}-ouath2/?state=${encodeURIComponent(
                    state
                )}&code=${encodeURIComponent(code)}`,
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            }),
        }),
        login: builder.mutation({
            query: ({ email_or_username, password }) => ({
                url: "/jwt/code/",
                method: "POST",
                body: { email_or_username, password },
            }),
        }),
        register: builder.mutation({
            query: ({ username, email, password, password2 }) => ({
                url: "/accounts/signup/",
                method: "POST",
                body: {
                    username,
                    email,
                    password,
                    // password2,
                },
            }),
        }),
        verify: builder.mutation({
            query: () => ({
                url: "/jwt/verify/",
                method: "POST",
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "/logout/",
                method: "POST",
            }),
        }),
        activation: builder.mutation({
            query: ({ uid, token }) => ({
                url: "/accounts/activation/",
                method: "POST",
                body: { uid, token },
            }),
        }),
        resetPassword: builder.mutation({
            query: (email) => ({
                url: "/accounts/reset_password/",
                method: "POST",
                body: { email },
            }),
        }),
        resetPasswordConfirm: builder.mutation({
            query: ({ uid, token, new_password, re_new_password }) => ({
                url: "/accounts/reset_password_confirm/",
                method: "POST",
                body: { uid, token, new_password, re_new_password },
            }),
        }),
    }),
});

export const {
    useRetrieveUserQuery,
    useSocialAuthenticateMutation,
    useLoginMutation,
    useRegisterMutation,
    useVerifyMutation,
    useLogoutMutation,
    useActivationMutation,
    useResetPasswordConfirmMutation,
} = authApiSlice;
