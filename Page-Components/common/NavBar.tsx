import React from "react";
import Link from "next/link";

export default function NavBar() {
    return (
        <div className="h-[64px] bg-foreground flex items-center gap-5 w-full">
            <div className="text-secondary-foreground text-[25px] font-[650] ml-[60px]">
                <Link href="/home" className="flex items-center">
                    <svg height={50} width={50}></svg>
                    VSL
                </Link>
            </div>
            <div className="w-[50%] flex gap-5 *:text-secondary-foreground *:font-[500]">
                <Link href="/courses">Đánh giá năng lực</Link>
                <Link href="/research-room">Khu j đó</Link>
                <Link href="/community">Cộng đồng</Link>
                <div></div>
            </div>
        </div>
    );
}
