"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { account_activation } from "@/axios/postData";

interface Props {
    params: {
        uid: string;
        token: string;
    };
}

export default function Activation({ params }: Props) {
    const router = useRouter();

    console.log(params.uid, params.token);

    account_activation(params.uid, params.token)
        .then(() => {
            toast.success("Kích hoạt thành công");
            router.push("/home");
        })
        .catch(() => {
            toast.error("Kích hoạt thất bại");
            router.push("/register");
        });

    return (
        <div>
            <div>
                <h2>Kích hoạt tài khoản...</h2>
            </div>
        </div>
    );
}
