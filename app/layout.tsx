import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer, SideBar } from "@/Page-Components/common";
import "./globals.css";
import { Setup } from "@/Page-Components/utils";
import "react-toastify/ReactToastify.min.css";
import { ThemeProvider } from "@/Page-Components/ui/themeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "VSL",
    description: "Web học (chắc v) ¯|_(ツ)_/¯",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body
                className={`${inter.className} flex flex-col w-[100vw] h-[100vh] overflow-y-auto overflow-x-hidden`}
            >
                <Setup />
                <ThemeProvider
                    attribute="class"
                    defaultTheme="Dark"
                    enableSystem
                    themes={[
                        "Light",
                        "Dark",
                        "Spring",
                        "Summer",
                        "Fall",
                        "Winter",
                    ]}
                    disableTransitionOnChange
                >
                    <div className="">
                        <NavBar />
                    </div>
                    <div className="pt-16 pb-20 z-0 w-full">{children}</div>
                    <div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
