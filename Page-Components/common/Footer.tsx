"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
    const pathname = usePathname();

    const noNavBarRoutes = [
        "login",
        "register",
        "reset-password",
        "research-area",
    ];

    if (noNavBarRoutes.includes(pathname.split("/")[1])) {
        return null;
    }

    return (
        <div className="w-full h-[200px] bg-footer mt-2">
            <div></div>
        </div>
    );
}
