import { toast } from "react-toastify";
import { useState, ChangeEvent, FormEvent } from "react";
import { reset_password } from "@/axios/postData";

export default function useRegister() {
    const [formData, setFormData] = useState("");

    const email = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData(event.target.value);
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        reset_password(email)
            .then(() => {
                toast.success(
                    "Đã gửi yêu cầu đổi mật khẩu, xin hãy kiểm tra email"
                );
            })
            .catch((err) => {
                toast.error(err.response.data.status);
            });
    };
    return {
        email,
        onChange,
        onSubmit,
    };
}
