"use client";

import { useResetPassword } from "@/hooks";
import { Form } from "@/Page-Components/Form";
import { RegLogStyle } from "@/Style";

export default function LoginForm() {
    const { isLoading, onChange, onSubmit } = useResetPassword();

    const style = {
        labelStyle: "text-accent mb-6 font-body1",
        inputStyle: `${RegLogStyle.inputStyle} mt-2`,
    };

    const config = [
        {
            labelText:
                "Nhập địa chỉ email của bạn và chúng tôi sẽ gửi link đặt lại mật khẩu.",
            inputProps: {
                type: "text",
                name: "email",
                required: true,
            },
        },
    ];

    return (
        <Form
            config={config}
            style={style}
            onChange={onChange}
            onSubmit={onSubmit}
            btnText="Gửi yêu cầu"
            isLoading={isLoading}
        />
    );
}
