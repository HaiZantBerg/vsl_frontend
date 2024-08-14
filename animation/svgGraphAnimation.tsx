import React from "react";

export default function SvgGraphAnimation() {
    return (
        <svg viewBox="-150 -150 300 300" width={500} height={500}>
            <line
                x1={0}
                y1={-150}
                x2={0}
                y2={300}
                stroke="#000"
                strokeWidth={0.5}
            ></line>
        </svg>
    );
}
