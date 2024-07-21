import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "@/axios/postData";

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
        login({username, password})
        .then((res) => {
            console.log(res);
        })
        .then(() => {
            toast.success('Đăng nhập thành công');
            router.push('/Home');
        })
        .catch((err) => {
            toast.error(err.response.data.status)
        })
    };
    return {
        username,
        password,
        onChange,
        onSubmit,
    };
}
