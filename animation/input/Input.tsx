interface InputProps {
    children: string;
    value: number;
    set: (newValue: number) => void;
    min?: number;
    max?: number;
    unit?: string;
}

export default function Input({
    value,
    children,
    set,
    min = -200,
    max = 200,
    unit,
}: InputProps) {
    return (
        <div className="flex">
            <div>{children}</div>
            <input
                value={value}
                type="range"
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value))}
            />
            <input
                type="number"
                value={value}
                min={min}
                max={max}
                onChange={(e) => set(parseFloat(e.target.value) || 0)}
            />
            <span>{unit}</span>
        </div>
    );
}
