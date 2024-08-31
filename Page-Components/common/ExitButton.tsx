"use client";

import { ArrowLeft } from "lucide-react";
import React from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";

export default function ExitButton() {
    const [scope, animate] = useAnimate();

    const handleMouseEnter = () => {
        animate(
            scope.current,
            {
                rotate: "360deg",
            },
            {
                duration: 0.5,
                ease: "easeOut",
            }
        );
    };

    const handleMouseLeave = () => {
        animate(
            scope.current,
            {
                rotate: "-360deg",
            },
            {
                duration: 0.5,
                ease: "easeOut",
            }
        );
    };

    return (
        <>
            <div
                className="flex w-fit"
                ref={scope}
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeave()}
            >
                <Link href="/courses">
                    <ArrowLeft />
                </Link>
            </div>
        </>
    );
}
