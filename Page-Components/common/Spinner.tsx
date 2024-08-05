import { ImSpinner10 } from "react-icons/im";
import cn from "classnames";

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

export default function Spinner({ sm, md, lg }: Props) {
    const className = cn("animate-spin text-secondary ", {
        "w-4 h-4": sm,
        "w-6 h-6": md,
        "w-10 h-10": lg,
    });

    return (
        <div role="status">
            <ImSpinner10 className={className} />
            <span className="sr-only">Loading</span>
        </div>
    );
}
