import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { login } from "@/axios/postData";
import { setToken } from "@/authentication/actions";

export default function useRegister() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
        login(formData)
            .then(async (data) => {
                toast.success("Đăng nhập thành công");
                await setToken(data.access, data.refresh);
                router.push("/home");
            })
            .catch((err) => {
                toast.error(err.response.data.detail);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return {
        isLoading,
        onChange,
        onSubmit,
    };
}
