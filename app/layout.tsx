import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NavBar, Footer } from "@/components/common";
import Provider from "@/redux/provider";
import "./globals.css";
import { Setup } from "@/components/utils";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from "@/components/ui/themeProvider";

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
        <html lang="en">
            <body className={`${inter.className}`}>
                <Provider>
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
                        <NavBar />
                        {children}
                        <Footer />
                    </ThemeProvider>
                </Provider>
            </body>
        </html>
    );
}
