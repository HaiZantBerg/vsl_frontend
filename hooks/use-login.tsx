import { useLoginMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function useRegister() {
    const router = useRouter();
    const [login, { isLoading }] = useLoginMutation();

    const [formData, setFormData] = useState({
        email_or_username: "",
        password: "",
    });

    const { email_or_username, password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        login({ email_or_username, password })
            .unwrap()
            .then(() => {
                toast.success("Đã đăng nhập tài khoản");
                router.push("/Home");
            })
            .catch(() => {
                toast.error("Đăng nhập tài khoản thất bại");
            });
    };
    return {
        email_or_username,
        password,
        isLoading,
        onChange,
        onSubmit,
    };
}
