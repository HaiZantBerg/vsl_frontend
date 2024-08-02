import * as React from "react";
import Link from "next/link";

export default function SideBar() {
    return (
        <div>
            <div className="w-[50%] flex gap-5 *:text-secondary-foreground *:font-[500]">
                <Link href="/courses">Đánh giá năng lực</Link>
                <Link href="/research-room">Khu j đó</Link>
                <Link href="/community">Cộng đồng</Link>
            </div>
        </div>
    );
}
