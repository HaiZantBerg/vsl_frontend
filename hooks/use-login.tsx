import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "@/axios/postData";
import { setToken } from "@/authentication/actions";

export default function useRegister() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const { username, password } = formData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        login({ username, password })
            .then(async (data) => {
                toast.success("Đăng nhập thành công");
                await setToken(data.access, data.refresh);
                router.push("/home");
            })
            .catch((err) => {
                toast.error(err.response.data.status);
            });
    };
    return {
        username,
        password,
        onChange,
        onSubmit,
    };
}
