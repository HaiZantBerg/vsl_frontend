import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent, FormEvent } from "react";
import { register } from "@/axios/postData";

export default function useRegister() {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        re_password: "",
    });

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        setIsLoading(true);
        event.preventDefault();
        register(formData)
            .then(() => {
                toast.success("Đăng kí thành công");
                router.push("/activation");
            })
            .catch((err) => {
                const res: [string][] = Object.values(err.response.data);
                toast.error(res[0][0]);
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
