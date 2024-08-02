"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { account_activation } from "@/axios/postData";
import { useEffect } from "react";

interface Props {
    params: {
        uid: string;
        token: string;
    };
}

export default function Activation({ params }: Props) {
    const router = useRouter();

    useEffect(() => {
        account_activation(params.uid, params.token)
            .then(() => {
                toast.success("Kích hoạt thành công");
                router.push("/login");
            })
            .catch(() => {
                toast.error("Kích hoạt thất bại");
                router.push("/register");
            });
    }, []);

    return (
        <div>
            <div>
                <h2>Kích hoạt tài khoản...</h2>
            </div>
        </div>
    );
}
