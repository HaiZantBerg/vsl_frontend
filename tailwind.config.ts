import type { Config } from "tailwindcss";

const config = {
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
            minHeight: {
                almostfull: "665.6px",
            },
            height: {
                roomCard: "550px",
                almostfull: "665.6px",
            },
            width: {
                roomCard: "550px",
            },
            borderRadius: {
                card: "10px",
                button: "12.5px",
            },
            fontSize: {
                ms: "100px",
                gt: "75px",
                too_big: "60px",
                xxl: "50px",
                xl: "40px",
                xl_pl: "45px",
                md_pl: "25px",
                sm_pl_pl: "17.5px",
                sm_pl2: "14.5px",
                sm_pl: "12.5px",
                xs: "5px",
            },
            fontWeight: {
                header1: "650",
                header2: "600",
                header2_5: "575",
                header3: " 550",
                header3_5: "525",
                header4: "500",
                body1: "450",
            },
            container: {
                center: true,
                padding: "2rem",
                screens: {
                    "2xl": "1400px",
                },
            },
            colors: {
                placeholder: "var(--placeholder)",
                roomCard: "var(--roomCard)",
                button: "var(--button)",
                hover: "var(--hover)",
                footer: "var(--footer)",
                border1: "var(--border1)",
                border2: "var(--border2)",
                underline: "var(--underline)",
                input: "var(--input)",
                ring1: "var(--ring1)",
                background: "var(--background)",
                foreground: "var(--foreground)",
                transparent1: "var(--transparent1)",
                transparent2: "var(--transparent2)",
                shadow: "var(--shadow)",
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
                    2: "var(--muted2)",
                    3: "var(--muted3)",
                    4: "var(--muted4)",
                    5: "var(--muted5)",
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
    variants: {
        extend: {},
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
