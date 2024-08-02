import React, { ChangeEvent } from "react";
import Link from "next/link";

export interface Props {
    labelText: string;
    inputProps: object;
    link?: boolean;
}

export interface Change {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface Extra {
    style: { labelStyle: string; inputStyle: string };
}

export default function Input({
    labelText,
    inputProps,
    onChange,
    style,
    link,
}: Props & Extra & Change) {
    return (
        <div>
            <label htmlFor={labelText} className={style.labelStyle}>
                {labelText}
            </label>
            <input
                {...inputProps}
                className={`${style.inputStyle}`}
                onChange={onChange}
            />
            {link && (
                <Link
                    href="/reset-password"
                    className="font-header2 w-full flex justify-end"
                >
                    Quên mật khẩu?
                </Link>
            )}
        </div>
    );
}
