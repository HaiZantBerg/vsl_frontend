import type { Config } from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./Page-Components/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    prefix: "",
    theme: {
        fontSize: {
            lg: "30px",
            md: "20px",
            sm: "10px",
        },
        extend: {
            borderRadius: {
                card: "10px",
                button: "12.5px",
            },
            fontSize: {
                xl: "40px",
                mdpl: "25px",
                smpl: "15px",
                xs: "5px",
            },
            fontWeight: {
                header1: "650",
                header2: "600",
                header3: " 550",
                header3_5: "525",
                header4: "500",
            },
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            colors: {
                footer: "var(--footer)",
                border: "var(--border)",
                underline: "var(--underline)",
                input: "var(--input)",
                ring: "var(--ring)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                primary: {
                    DEFAULT: "var(--primary)",
                    foreground: "var(--primary-foreground)",
                },
                secondary: {
                    DEFAULT: "var(--secondary)",
                    foreground: "var(--secondary-foreground)",
                },
                destructive: {
                    DEFAULT: "var(--destructive)",
                    foreground: "var(--destructive-foreground)",
                },
                muted: {
                    DEFAULT: "var(--muted)",
                    foreground: "var(--muted-foreground)",
                },
                accent: {
                    DEFAULT: "var(--accent)",
                    foreground: "var(--accent-foreground)",
                },
                popover: {
                    DEFAULT: "var(--popover)",
                    foreground: "var(--popover-foreground)",
                },
                card: {
                    DEFAULT: "var(--card)",
                    foreground: "var(--card-foreground)",
                },
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
