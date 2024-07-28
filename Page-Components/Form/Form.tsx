import { FormEvent, ChangeEvent } from "react";
import { Input } from "@/Page-Components/Form";
import { Spinner } from "@/Page-Components/common";

interface Config {
    labelText: string;
    divStyle: string;
    labelStyle: string;
    inputStyle: string;
    value: string;
    type: string;
    labelId: string;
    required?: boolean;
    link?: {
        divStyle: string;
        linkURL: string;
        linkText: string;
        linkStyle: string;
    };
}

interface Props {
    config: Config[];
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    btnText: string;
    formStyle: string;
}

export default function Form({
    config,
    onChange,
    onSubmit,
    btnText,
    formStyle,
}: Props) {
    return (
        <form onSubmit={onSubmit} className={formStyle}>
            {config.map((ip) => (
                <Input
                    key={ip.labelId}
                    divStyle={ip.divStyle}
                    labelStyle={ip.labelStyle}
                    inputStyle={ip.inputStyle}
                    value={ip.value}
                    type={ip.type}
                    labelId={ip.labelId}
                    required={ip.required}
                    onChange={onChange}
                    link={ip.link}
                >
                    {ip.labelText}
                </Input>
            ))}
            <div className="w-full">
                <button
                    type="submit"
                    className="flex justify-center w-full h-10 rounded-card font-header1 p-1 bg-accent items-center text-accent-foreground"
                >
                    {`${btnText}`}
                </button>
            </div>
        </form>
    );
}
