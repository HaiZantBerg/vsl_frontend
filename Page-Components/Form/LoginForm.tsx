"use client";

import { useLogin } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Style";

export default function LoginForm() {
    const { isLoading, onChange, onSubmit } = useLogin();

    const style = {
        labelStyle: `${RegLogStyle.labelTextStyle}`,
        inputStyle: `${RegLogStyle.inputStyle}`,
    };

    const config = [
        {
            labelText: "Tên tài khoản",
            inputProps: {
                type: "text",
                name: "username",
                required: true,
            },
        },
        {
            labelText: "Mật khẩu",
            inputProps: { type: "text", name: "password", required: true },
            link: true,
        },
    ];

    return (
        <Form
            config={config}
            style={style}
            onSubmit={onSubmit}
            onChange={onChange}
            btnText="Đăng nhập"
            isLoading={isLoading}
        />
    );
}
