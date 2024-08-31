"use client";

import React, { useEffect, useRef } from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";

export default function ExitButton() {
    const [scope, animate] = useAnimate();
    const buttonBorderRgb = useRef<string>();

    useEffect(() => {
        const rootColor = getComputedStyle(document.documentElement)
            .getPropertyValue("--foreground")
            .slice(1);
        buttonBorderRgb.current =
            String(parseInt(rootColor.slice(0, 2), 16)) +
            "," +
            String(parseInt(rootColor.slice(2, 4), 16)) +
            "," +
            String(parseInt(rootColor.slice(4, 6), 16));
    }, []);

    const handleMouseEnter = async () => {
        animate(
            "#arrow",
            {
                rotate: "360deg",
            },
            {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                damping: 10,
            }
        );
        animate(scope.current, {
            borderColor: `rgba(${buttonBorderRgb.current},1)`,
        });
        animate(
            scope.current,
            {
                width: "150px",
            },
            {
                duration: 0.1,
                ease: "easeOut",
            }
        );
        animate(
            "#text",
            {
                opacity: 1,
            },
            { duration: 0.6 }
        );
    };

    const handleMouseLeave = async () => {
        animate(
            "#arrow",
            {
                rotate: "-360deg",
            },
            {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                damping: 10,
            }
        );
        animate(scope.current, {
            borderColor: `rgba(${buttonBorderRgb.current},0)`,
        });
        animate(scope.current, {
            width: 50,
        });
        animate("#text", {
            opacity: 0,
        });
    };

    return (
        <Link
            href="/courses"
            className="border-2 absolute overflow-hidden w-12 h-12 rounded-full font-semibold"
            style={{
                borderColor: `rgba(${buttonBorderRgb.current},1)`,
            }}
            ref={scope}
            onMouseEnter={() => handleMouseEnter()}
            onMouseLeave={() => handleMouseLeave()}
        >
            <div className="text-nowrap gap-4 inline-flex h-11 items-center">
                <svg
                    height={20}
                    width={20}
                    viewBox="-10 -10 20 20"
                    id="arrow"
                    className="ml-[13.5px]"
                >
                    <path
                        d="M8 0 L-8 0 L0 -7 M0 7 L-8 0"
                        stroke="var(--foreground)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
                <div id="text" className="opacity-0">
                    Quay trở lại
                </div>
            </div>
        </Link>
    );
}
