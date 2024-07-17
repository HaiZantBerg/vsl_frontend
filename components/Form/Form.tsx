import { FormEvent, ChangeEvent } from "react";
import { Input } from "@/components/Form";
import { Spinner } from "@/components/common";

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
    isLoading: boolean;
    btnText: string;
    formStyle: string;
}

export default function Form({
    config,
    onChange,
    onSubmit,
    isLoading,
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
                    className="flex justify-center items-center w-full h-10 rounded-md font-[500] p-1 bg-primary-foreground text-secondary 
                    hover:bg-secondary-foreground"
                    disabled={isLoading}
                >
                    {isLoading ? <Spinner sm /> : `${btnText}`}
                </button>
            </div>
        </form>
    );
}
