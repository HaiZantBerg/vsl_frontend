"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme("light");
    }, []);

    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
