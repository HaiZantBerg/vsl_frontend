import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer } from "@/Page-Components/common";
import "./globals.css";
import { Setup } from "@/Page-Components/utils";
import "react-toastify/ReactToastify.min.css";
import { ThemeProvider } from "@/Page-Components/ui/themeProvider";

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
                    <NavBar />
                    {children}
                    <Footer />
                </ThemeProvider>
            </body>
        </html>
    );
}
