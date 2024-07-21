"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
    params: {
        uid: string;
        token: string;
    };
}

export default function Activation({ params }: Props) {
    const router = useRouter();

    return (
        <div>
            <div>
                <h2>Kích hoạt tài khoản...</h2>
            </div>
        </div>
    );
}
