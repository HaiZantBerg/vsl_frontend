import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { register } from "@/axios/postData";
import { setToken } from "@/authentication/actions";

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
            .then(async (data) => {
                toast.success("Đăng kí thành công");
                await setToken(data.access, data.refresh);
                router.push("/home");
            })
            .catch((err) => {
                toast.error(err.response);
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
