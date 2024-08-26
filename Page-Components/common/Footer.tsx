"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();
    const lastSegment = pathname.split("/").at(-1);

    const noNavBarRoutes = [
        "login",
        "register",
        "reset-password",
        "research-area",
    ];

    if (
        noNavBarRoutes.includes(pathname.split("/")[1]) ||
        (pathname.split("/").includes("lesson") &&
            lastSegment &&
            /\d/.test(lastSegment))
    ) {
        return null;
    }

    return (
        <div className="w-full h-[200px] bg-footer mt-2">
            <div></div>
        </div>
    );
}
