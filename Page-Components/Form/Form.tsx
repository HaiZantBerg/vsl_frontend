import { FormEvent } from "react";
import { Input } from "@/Page-Components/Form";
import { Spinner } from "@/Page-Components/common";
import type { Props as Config, Change } from "./Input";

interface Props {
    style: {
        labelStyle: string;
        inputStyle: string;
    };
    config: Config[];
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    btnText: string;
    isLoading: boolean;
    buttonStyle?: string;
}

export default function Form({
    style,
    config,
    onSubmit,
    onChange,
    btnText,
    isLoading,
    buttonStyle,
}: Props & Change) {
    return (
        <form onSubmit={onSubmit} className="flex flex-col gap-6">
            {config.map((ip) => (
                <Input
                    key={ip.labelText}
                    labelText={ip.labelText}
                    inputProps={ip.inputProps}
                    onChange={onChange}
                    style={style}
                    link={ip.link}
                />
            ))}
            <button
                type="submit"
                className={`w-full h-10 rounded-card font-header1 bg-button text-accent-foreground ${buttonStyle} hover:animate-buttonHover`}
                disabled={isLoading}
            >
                {isLoading ? <Spinner sm /> : btnText}
            </button>
        </form>
    );
}
