"use client";

import { useRegister } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Style";

export default function RegisterForm() {
    const { username, email, password, re_password, onChange, onSubmit } =
        useRegister();

    const config = [
        {
            labelText: "Tên tài khoản",
            divStyle: `${RegLogStyle.divFormStyle}`,
            labelStyle: `${RegLogStyle.labelTextStyle}`,
            inputStyle: `${RegLogStyle.forminput}`,
            value: username,
            type: "text",
            labelId: "username",
            // required: true,
        },
        {
            labelText: "Địa chỉ email",
            divStyle: `${RegLogStyle.divFormStyle}`,
            labelStyle: `${RegLogStyle.labelTextStyle}`,
            inputStyle: `${RegLogStyle.forminput}`,
            value: email,
            type: "text",
            labelId: "email",
            // required: true,
        },
        {
            labelText: "Mật khẩu",
            divStyle: `${RegLogStyle.divFormStyle}`,
            labelStyle: `${RegLogStyle.labelTextStyle}`,
            inputStyle: `${RegLogStyle.forminput}`,
            value: password,
            type: "text",
            labelId: "password",
            // required: true,
        },
        {
            labelText: "Xác nhận mật khẩu",
            divStyle: `${RegLogStyle.divFormStyle}`,
            labelStyle: `${RegLogStyle.labelTextStyle}`,
            inputStyle: `${RegLogStyle.forminput}`,
            value: re_password,
            type: "text",
            labelId: "re_password",
            // required: true,
        },
    ];

    return (
        <Form
            config={config}
            onChange={onChange}
            onSubmit={onSubmit}
            btnText="Đăng kí"
            formStyle="flex flex-col justify-center gap-[25px] h-full w-full"
        />
    );
}
