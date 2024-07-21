import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/public/image-removebg-preview (11).png";

export default function NavBar() {
    return (
        <div className="h-[64px] bg-primary w-full flex items-center px-12">
            <Link
                href="/"
                className="text-primary-foreground font-[640] text-[25px] flex object-none"
            >
                <Image
                    src={logo}
                    alt="Visual Subject Learning"
                    priority
                    width={25}
                    height={10}
                    className="w-full"
                />
                VSL
            </Link>
        </div>
    );
}
