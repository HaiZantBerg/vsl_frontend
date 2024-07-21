"use client";

import { useResetPassword } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Page-Components/Style";

export default function LoginForm() {
    const { email, onChange, onSubmit } = useResetPassword();

    const config = [
        {
            labelText: "Địa chỉ email",
            divStyle: ``,
            labelStyle: "font-[450]",
            inputStyle: `${RegLogStyle.forminput}`,
            value: email,
            type: "text",
            labelId: "email",
            required: true,
        },
    ];

    return (
        <Form
            config={config}
            onChange={onChange}
            onSubmit={onSubmit}
            btnText="Gửi yêu cầu"
            formStyle="flex flex-col justify-center gap-[25px] h-full w-full"
        />
    );
}
