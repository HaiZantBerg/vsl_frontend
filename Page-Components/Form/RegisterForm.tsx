"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Style";

export default function RegisterForm() {
    const { isLoading, onChange, onSubmit } = useRegister();

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
            labelText: "Địa chỉ email",
            inputProps: { type: "text", name: "email", required: true },
        },
        {
            labelText: "Mật khẩu",
            inputProps: { type: "text", name: "password", required: true },
        },
        {
            labelText: "Xác nhận mật khẩu",
            inputProps: {
                type: "text",
                name: "re_password",
                required: true,
            },
        },
    ];

    return (
        <Form
            config={config}
            style={style}
            onSubmit={onSubmit}
            onChange={onChange}
            btnText="Đăng kí"
            isLoading={isLoading}
            buttonStyle="mt-1"
        />
    );
}
