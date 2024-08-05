"use client";

import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";
import SideBar from "./SideBar";

export default function NavBar() {
    const pathname = usePathname();

    const noNavBarRoutes = ["login", "register", "reset-password", ""];

    if (noNavBarRoutes.includes(pathname.split("/")[1])) {
        return null;
    }

    return (
        <div className="h-16 bg-foreground flex items-center px-4 gap-6">
            <SideBar />
            <Link
                href="/home"
                className="text-secondary-foreground text-[25px] font-[650] flex items-center"
            >
                <svg height={50} width={50}></svg>
                VSL
            </Link>
            <div className="grow flex items-center">
                <form
                    className="ml-auto w-96 h-9 rounded-xl flex items-center justify-end pr-2"
                    style={{
                        background: "rgba(110, 126, 135, 0.67)",
                    }}
                >
                    <></>
                    <input
                        type="text"
                        className="w-11/12 bg-transparent outline-none"
                    />
                </form>
            </div>
        </div>
    );
}
