"use client";

import { useLogin } from "@/hooks";
import { Form } from "@/components/Form";
import { RegLogStyle } from "@/components/Style";

export default function LoginForm() {
    const { email_or_username, password, isLoading, onChange, onSubmit } =
        useLogin();

    const config = [
        {
            labelText: "Nhập tên tài khoản",
            divStyle: ``,
            labelStyle: "font-[450]",
            inputStyle: `${RegLogStyle.forminput}`,
            value: email_or_username,
            type: "text",
            labelId: "email_or_username",
            required: true,
        },
        {
            labelText: "Nhập mật khẩu",
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
                linkStyle: "text-secondary-foreground font-[525]",
            },
        },
    ];

    return (
        <Form
            config={config}
            onChange={onChange}
            onSubmit={onSubmit}
            isLoading={isLoading}
            btnText="Đăng nhập"
            formStyle="flex flex-col gap-[25px] h-full w-full"
        />
    );
}
