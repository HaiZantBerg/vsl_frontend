"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteTokens } from "@/authentication/actions";

export default function LogOut({ className }: { className: string }) {
    const router = useRouter();

    return (
        <button
            onClick={async () => {
                await deleteTokens();
                router.push("/login");
            }}
            className={className}
        >
            Đăng xuất
        </button>
    );
}
