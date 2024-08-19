"use client";

import { useEffect, useState } from "react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const themeIcons = {
    default: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>1</div>
        );
    },
    dark: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>2</div>
        );
    },
    light: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>3</div>
        );
    },
    spring: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>4</div>
        );
    },
    summer: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>5</div>
        );
    },
    fall: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>6</div>
        );
    },
    winter: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>7</div>
        );
    },
};

export default function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    const [currentTheme, setCurrentTheme] = useState<
        "light" | "dark" | "default" | "spring" | "summer" | "fall" | "winter"
    >();

    useEffect(() => {
        const theme: any = localStorage.getItem("theme");
        setCurrentTheme(theme);
    }, [theme]);

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    className="text-background dark"
                    size="none"
                    variant="none"
                >
                    {currentTheme ? themeIcons[currentTheme]() : null}
                </Button>
            </PopoverTrigger>
            <PopoverContent direction={"top"} className="relative top-2 w-6">
                {[
                    "default",
                    "dark",
                    "light",
                    "spring",
                    "summer",
                    "fall",
                    "winter",
                ].map((theme) => (
                    <div
                        key={theme}
                        className="rounded-[0.2rem] text-[.875rem] px-2 py-1.5 select-none transition ease-in-out bg-button hover:bg-hover duration-300"
                        onClick={() => {
                            setTheme(theme);
                        }}
                    >
                        {theme}
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    );
}
