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
    System: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>1</div>
        );
    },
    Dark: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>2</div>
        );
    },
    Light: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>3</div>
        );
    },
    Spring: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>4</div>
        );
    },
    Summer: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>5</div>
        );
    },
    Fall: function () {
        return (
            // <svg>
            //     <path></path>
            // </svg>
            <div>6</div>
        );
    },
    Winter: function () {
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
        "Light" | "Dark" | "System" | "Spring" | "Summer" | "Fall" | "Winter"
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
                    "System",
                    "Dark",
                    "Light",
                    "Spring",
                    "Summer",
                    "Fall",
                    "Winter",
                ].map((theme) => (
                    <div
                        key={theme}
                        className="rounded-[0.2rem] text-[.875rem] px-2 py-1.5 select-none transition ease-in-out bg-button hover:bg-hover duration-300"
                        onClick={() => {
                            setTheme(theme);
                            localStorage.setItem("theme", theme);
                        }}
                    >
                        {theme}
                    </div>
                ))}
            </PopoverContent>
        </Popover>
    );
}
