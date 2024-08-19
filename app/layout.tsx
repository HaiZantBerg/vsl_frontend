import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer } from "@/Page-Components/common";
import "./globals.css";
import { Setup } from "@/Page-Components/utils";
import "react-toastify/ReactToastify.min.css";
import { ThemeProvider } from "@/components/ui/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VSL",
    description: "Web học (chắc v) ¯|_(ツ)_/¯",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
            <body
                className={`${inter.className} overflow-y-auto overflow-x-hidden`}
            >
                <Setup />
                <ThemeProvider
                    attribute="class"
                    enableSystem
                    defaultTheme="default"
                    enableColorScheme={false}
                    themes={[
                        "default",
                        "light",
                        "dark",
                        "spring",
                        "summer",
                        "fall",
                        "winter",
                    ]}
                    disableTransitionOnChange
                    storageKey="theme"
                >
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
