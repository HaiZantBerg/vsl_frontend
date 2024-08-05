"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { deleteTokens } from "@/authentication/actions";

export default function LogOut() {
    const router = useRouter();

    return (
        <div className="w-[240px] h-[200px] bg-card rounded-lg justify-center">
            <button
                onClick={async () => {
                    await deleteTokens();
                    router.push("/login");
                }}
                className="text-card-foreground bg-red-600"
            >
                Đăng xuất
            </button>
        </div>
    );
}
