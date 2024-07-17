"use client";

import { toast } from "react-toastify";
import { useActivationMutation } from "@/redux/features/authApiSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface Props {
    params: {
        uid: string;
        token: string;
    };
}

export default function Activation({ params }: Props) {
    const router = useRouter();
    const [activation] = useActivationMutation();

    useEffect(() => {
        const { uid, token } = params;
        activation({ uid, token })
            .unwrap()
            .then(() => {
                toast.success("Kích hoạt tài khoản thành công");
            })
            .catch(() => {
                toast.error("Kích hoạt tài khoản không thành công");
            })
            .finally(() => {
                router.push("/Login");
            });
    });

    return (
        <div>
            <div>
                <h2>Kích hoạt tài khoản...</h2>
            </div>
        </div>
    );
}
