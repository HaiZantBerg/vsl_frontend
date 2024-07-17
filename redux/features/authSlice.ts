import { createSlice } from "@reduxjs/toolkit";

interface authState {
    isAuthenticated: boolean;
    isLoading: boolean;
}

const initialState = {
    isAuthenticated: false,
    isLoading: true,
} as authState;

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.isAuthenticated = false;
        },
        finishInitialLoad: (state) => {
            state.isLoading = false;
        },
    },
});

export const { setAuth, logout, finishInitialLoad } = AuthSlice.actions;
export default AuthSlice.reducer;
