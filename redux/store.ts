import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apislice } from "./services/apislice";

export const makeStore = () =>
    configureStore({
        reducer: {
            [apislice.reducerPath]: apislice.reducer,
            auth: authReducer,
        },
        middleware: (getDefaultMiddleWare) =>
            getDefaultMiddleWare().concat(apislice.middleware),
        devTools: process.env.NODE_ENV !== "production",
    });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
