import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { register } from "@/axios/postData";

export default function useRegister() {
    const router = useRouter();

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
            .then(() => {
                toast.success("Đăng kí thành công");
                router.push("/Home");
            })
            .catch((err) => {
                toast.error(err.response.data.status);
            });
    };
    return {
        username,
        email,
        password,
        re_password,
        onChange,
        onSubmit,
    };
}
