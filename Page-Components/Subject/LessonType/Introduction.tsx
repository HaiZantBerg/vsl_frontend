"use client";

import React from "react";
import { ContentProps } from "../Lesson";
import { IntroductionSvg } from "@/animation/LessonAnimation/IntroductionSvg";
import { cn } from "@/lib/utils";

export default function Introduction({ content }: { content: ContentProps }) {
    const SvgComponent =
        IntroductionSvg[content.svgId as keyof typeof IntroductionSvg];

    return (
        <div className={`flex justify-${content.textPos}`}>
            <div
                className={cn(
                    content.className,
                    "text-center content-center h-[650px]"
                )}
            >
                <span className="font-bold text-xxl">{content.header}</span>
                <div>
                    {content.text1?.split("\n").map((line) => (
                        <React.Fragment key={line}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                </div>
            </div>
            {SvgComponent ? <SvgComponent /> : null}
        </div>
    );
}
