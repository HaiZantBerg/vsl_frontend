import { useRegisterMutation } from "@/redux/features/authApiSlice";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";

export default function useRegister() {
    const router = useRouter();
    const [register, { isLoading }] = useRegisterMutation();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
    });

    const { username, email, password, re_password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        register({ username, email, password, re_password })
            .unwrap()
            .then(() => {
                toast.success("Vui lòng kiểm tra email để xác minh tài khoản.");
                router.push("/Login");
            })
            .catch(() => {
                toast.error("Đăng ký tài khoản thất bại");
            });
    };
    return {
        username,
        email,
        password,
        re_password,
        isLoading,
        onChange,
        onSubmit,
    };
}
