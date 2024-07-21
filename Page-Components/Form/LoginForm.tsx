"use client";

import { useLogin } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Page-Components/Style";

export default function LoginForm() {
    const { username, password, onChange, onSubmit } = useLogin();

    const config = [
        {
            labelText: "Tên tài khoản",
            divStyle: ``,
            labelStyle: "font-[450]",
            inputStyle: `${RegLogStyle.forminput}`,
            value: username,
            type: "text",
            labelId: "username",
            required: true,
        },
        {
            labelText: "Mật khẩu",
            divStyle: ``,
            labelStyle: "font-[450]",
            inputStyle: `${RegLogStyle.forminput}`,
            value: password,
            type: "text",
            labelId: "password",
            required: true,
            link: {
                divStyle: "w-full flex justify-end",
                linkURL: "/reset-password",
                linkText: "Quên mật khẩu?",
                linkStyle: "font-[525]",
            },
        },
    ];

    return (
        <Form
            config={config}
            onChange={onChange}
            onSubmit={onSubmit}
            btnText="Đăng nhập"
            formStyle="flex flex-col justify-center gap-[25px] h-full w-full"
        />
    );
}
