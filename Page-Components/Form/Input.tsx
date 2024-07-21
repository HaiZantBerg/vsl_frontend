import { ChangeEvent } from "react";
import Link from "next/link";

interface Props {
    children: React.ReactNode;
    divStyle: string;
    labelStyle: string;
    inputStyle: string;
    value: string;
    type: string;
    labelId: string;
    required?: boolean;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    link?: {
        divStyle: string;
        linkURL: string;
        linkText: string;
        linkStyle: string;
    };
}

export default function Input({
    children,
    divStyle,
    labelStyle,
    inputStyle,
    value,
    type,
    labelId,
    required = false,
    onChange,
    link,
}: Props) {
    return (
        <div className={divStyle}>
            <label htmlFor={labelId} className={labelStyle}>
                {children}
            </label>
            <input
                id={labelId}
                type={type}
                name={labelId}
                className={inputStyle}
                onChange={onChange}
                value={value}
                required={required}
            />
            {link && (
                <div className={link.divStyle}>
                    <Link href={link.linkURL} className={link.linkStyle}>
                        {link.linkText}
                    </Link>
                </div>
            )}
        </div>
    );
}
