import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer, SideBar } from "@/Page-Components/common";
import "./globals.css";
import { Setup } from "@/Page-Components/utils";
import "react-toastify/ReactToastify.min.css";
import { ThemeProvider } from "@/Page-Components/ui/themeProvider";
import { hasAccessTokens } from "@/authentication/actions";

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
    const isAuthenticated = await hasAccessTokens();

    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} overflow-y-auto overflow-x-hidden`}
            >
                <Setup />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="System"
                    enableSystem
                    themes={[
                        "System",
                        "Light",
                        "Dark",
                        "Spring",
                        "Summer",
                        "Fall",
                        "Winter",
                    ]}
                    disableTransitionOnChange
                >
                    {isAuthenticated && <NavBar />}
                    {children}
                    <Conditional>
                        <Footer />
                    </Conditional>
                </ThemeProvider>
            </body>
        </html>
    );
}
