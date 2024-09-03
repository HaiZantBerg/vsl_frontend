"use client";

import { easeCubicOut } from "d3-ease";
import React, { forwardRef, useEffect, useRef } from "react";
import Link from "next/link";
import { useAnimate } from "framer-motion";
import slugify from "slugify";

interface LessonButtonProps {
    isFinished?: boolean;
    lessonNo: number;
    lessonTitle: string;
    lessonDescription?: string;
    themeColor: string;
    lessonId: number;
}

export default forwardRef<HTMLAnchorElement, LessonButtonProps>(
    function LessonButton(
        {
            isFinished,
            lessonNo,
            lessonTitle,
            lessonDescription,
            themeColor,
            lessonId,
        },
        ref
    ) {
        const [scope, animate] = useAnimate();

        const lineRef = useRef<(SVGLineElement | null)[]>([]);
        const svgRef = useRef<SVGSVGElement>(null);
        const x = useRef(0);
        const y1 = useRef<number[]>([]);
        const angle = useRef<number>(0);
        const radians = useRef<number>(0);
        const sin = useRef<number>(0);
        const easing = useRef<number>(0);
        const time = useRef<number>(0);
        const isHoveringGroup = useRef(false);
        const isHoveringTooltip = useRef(true);
        const isHoveringAnchor = useRef(true);
        const isHoveringSvg = useRef(false);

        const animationSpeed = 2.5;
        const lineInitialHeight = 20;
        const PiDivition = 2;
        const strokeWidth = 20;
        const rearStrokeOpacity = 0.5;
        const frontStrokeOpacity = 0.75;
        const lessonAnchorTop = [0, -50, 100, -25, 0, 25, 75, -40, 0, -50];
        const lessonAnchorLeft = [80, 0, -100, -100, 10, -30, 20, 30, 600, 600];
        const hoveringStrokeColor = useRef("");
        const unhoveringStrokeColor = useRef("");

        useEffect(() => {
            if (isFinished) {
                hoveringStrokeColor.current = "0, 189, 6";
                unhoveringStrokeColor.current = "36, 224, 43";
            } else {
                hoveringStrokeColor.current = themeColor;
                unhoveringStrokeColor.current = "71, 89, 144";
            }
        }, []);

        const handleStartButtonAnimation = () => {
            let animationId: number;

            isHoveringSvg.current = true;

            const animation = () => {
                if (angle.current < 360) {
                    angle.current += animationSpeed;
                } else {
                    angle.current = 0;
                }
                radians.current = angle.current * (Math.PI / 180);

                if (time.current < 1) {
                    easing.current = easeCubicOut(time.current);
                    time.current += 0.01;
                }

                [...Array.from(Array(20).keys())].map((id) => {
                    sin.current =
                        Math.sin(
                            radians.current + id * (Math.PI / (20 / PiDivition))
                        ) *
                        easing.current *
                        2.5;

                    lineRef.current[id]?.setAttributeNS(
                        "",
                        "y2",
                        `${
                            y1.current[id] -
                            10 * sin.current ** 2 -
                            lineInitialHeight
                        }`
                    );
                });

                if (isHoveringSvg.current) {
                    animationId = requestAnimationFrame(animation);
                } else {
                    cancelAnimationFrame(animationId);
                }
            };

            animationId = requestAnimationFrame(animation);

            return () => cancelAnimationFrame(animationId);
        };
        const handleStopButtonAnimation = () => {
            let animationId: number;

            isHoveringSvg.current = false;

            const animation = () => {
                if (angle.current < 360) {
                    angle.current += animationSpeed;
                } else {
                    angle.current = 0;
                }
                radians.current = angle.current * (Math.PI / 180);

                [...Array.from(Array(20).keys())].map((id) => {
                    sin.current =
                        Math.sin(
                            radians.current + id * (Math.PI / (20 / PiDivition))
                        ) *
                        easing.current *
                        2.5;

                    lineRef.current[id]?.setAttributeNS(
                        "",
                        "y2",
                        `${
                            y1.current[id] -
                            10 * sin.current ** 2 -
                            lineInitialHeight
                        }`
                    );
                });

                if (time.current > 0 && !isHoveringSvg.current) {
                    animationId = requestAnimationFrame(animation);
                    easing.current = easeCubicOut(time.current);
                    time.current -= 0.01;
                } else {
                    cancelAnimationFrame(animationId);
                }
            };

            animationId = requestAnimationFrame(animation);

            return () => cancelAnimationFrame(animationId);
        };
        const handelOpeningTooltip = () => {
            animate(
                "#outerTooltip",
                {
                    width: "fit-content",
                    opacity: 1,
                },
                {
                    ease: "easeIn",
                }
            );
            animate(
                "#outerTooltip",
                {
                    height: "fit-content",
                },
                {
                    delay: 0.3,
                    ease: "easeOut",
                }
            );
            animate(
                "#innerTooltip",
                {
                    opacity: 1,
                },
                {
                    ease: "easeOut",
                }
            );
            for (let index = 0; index < 10; index++) {
                animate(
                    `#rear${index}`,
                    {
                        stroke: `rgba(${hoveringStrokeColor.current},${rearStrokeOpacity})`,
                    },
                    {
                        delay: (index + 4) / 10,
                        duration: 0.1,
                        ease: "easeIn",
                    }
                );
                animate(
                    `#front${index}`,
                    {
                        stroke: `rgba(${hoveringStrokeColor.current},${frontStrokeOpacity})`,
                    },
                    {
                        delay: (index + 4) / 10,
                        duration: 0.1,
                        ease: "easeIn",
                    }
                );
            }
        };
        const handelClosingTooltip = () => {
            animate(
                "#outerTooltip",
                {
                    width: 5,
                },
                {
                    ease: "easeIn",
                }
            );
            animate(
                "#outerTooltip",
                {
                    height: 0,
                    opacity: 0,
                },
                {
                    delay: 0.35,
                    ease: "easeIn",
                }
            );
            animate(
                "#innerTooltip",
                {
                    opacity: 0,
                },
                {
                    ease: "easeOut",
                }
            );
            for (let index = 0; index < 10; index++) {
                animate(
                    `#rear${index}`,
                    {
                        stroke: `rgba(${unhoveringStrokeColor.current},${rearStrokeOpacity})`,
                    },
                    {
                        delay: (index + 2) / 10,
                        duration: 0.1,
                        ease: "easeIn",
                    }
                );
                animate(
                    `#front${index}`,
                    {
                        stroke: `rgba(${unhoveringStrokeColor.current},${frontStrokeOpacity})`,
                    },
                    {
                        delay: (index + 2) / 10,
                        duration: 0.1,
                        ease: "easeIn",
                    }
                );
            }
        };

        return (
            <div
                className="relative flex items-center group p-3"
                style={{
                    left: `${lessonAnchorLeft[lessonNo]}px`,
                    top: `${lessonAnchorTop[lessonNo]}px`,
                }}
                onMouseEnter={() => {
                    isHoveringGroup.current = true;
                }}
                onMouseLeave={() => {
                    isHoveringGroup.current = false;
                    if (!isHoveringGroup.current && !isHoveringAnchor.current) {
                        handelClosingTooltip();
                        if (isHoveringSvg.current) {
                            handleStopButtonAnimation();
                        }
                    }
                }}
                ref={scope}
            >
                <Link
                    className="h-[82.5px] aspect-square"
                    href={`/courses/lesson/${slugify(lessonTitle, {
                        lower: true,
                        remove: /[*+~.()'"!:@]/g,
                    })}-${lessonId}`}
                    ref={ref}
                    onMouseEnter={() => {
                        isHoveringAnchor.current = true;
                        if (
                            isHoveringGroup.current &&
                            isHoveringAnchor.current
                        ) {
                            handelOpeningTooltip();
                            if (!isHoveringSvg.current) {
                                handleStartButtonAnimation();
                            }
                        }
                    }}
                    onMouseLeave={() => {
                        isHoveringAnchor.current = false;
                        setTimeout(() => {
                            if (
                                !isHoveringAnchor.current &&
                                !isHoveringTooltip.current &&
                                isHoveringGroup.current
                            ) {
                                handelClosingTooltip();
                                if (isHoveringSvg.current) {
                                    handleStopButtonAnimation();
                                }
                            }
                        }, 1);
                    }}
                >
                    <svg
                        width={75}
                        height={75}
                        viewBox="-100 -75 200 175"
                        className="scale-110"
                        ref={svgRef}
                    >
                        {[...Array.from(Array(5).keys())].map((index) => {
                            x.current = -10 - 20 * index;
                            y1.current[index] = (-2 / 5) * x.current;

                            return (
                                <line
                                    x1={x.current}
                                    x2={x.current}
                                    y1={y1.current[index]}
                                    y2={y1.current[index] - lineInitialHeight}
                                    ref={(el) => {
                                        lineRef.current[index] = el;
                                    }}
                                    stroke={`rgba(${unhoveringStrokeColor.current},${rearStrokeOpacity})`}
                                    id={`rear${4 - index}`}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                    key={index}
                                />
                            );
                        })}
                        {[...Array.from(Array(5).keys())].map((index) => {
                            x.current = 90 - 20 * index;
                            y1.current[index + 15] = (2 / 5) * x.current;

                            return (
                                <line
                                    x1={x.current}
                                    x2={x.current}
                                    y1={y1.current[index + 15]}
                                    y2={
                                        y1.current[index + 15] -
                                        lineInitialHeight
                                    }
                                    ref={(el) => {
                                        lineRef.current[index + 15] = el;
                                    }}
                                    stroke={`rgba(${unhoveringStrokeColor.current},${rearStrokeOpacity})`}
                                    id={`rear${9 - index}`}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                    key={index}
                                />
                            );
                        })}
                        {[...Array.from(Array(5).keys())].map((index) => {
                            x.current = -90 + 20 * index;
                            y1.current[index + 5] = (2 / 5) * x.current + 80;

                            return (
                                <line
                                    x1={x.current}
                                    x2={x.current}
                                    y1={y1.current[index + 5]}
                                    y2={
                                        y1.current[index + 5] -
                                        lineInitialHeight
                                    }
                                    ref={(el) => {
                                        lineRef.current[index + 5] = el;
                                    }}
                                    stroke={`rgba(${unhoveringStrokeColor.current},${frontStrokeOpacity})`}
                                    id={`front${9 - index}`}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                    key={index}
                                />
                            );
                        })}
                        {[...Array.from(Array(5).keys())].map((index) => {
                            x.current = 10 + 20 * index;
                            y1.current[index + 10] = (-2 / 5) * x.current + 80;

                            return (
                                <line
                                    x1={x.current}
                                    x2={x.current}
                                    y1={y1.current[index + 10]}
                                    y2={
                                        y1.current[index + 10] -
                                        lineInitialHeight
                                    }
                                    ref={(el) => {
                                        lineRef.current[index + 10] = el;
                                    }}
                                    stroke={`rgba(${unhoveringStrokeColor.current},${frontStrokeOpacity})`}
                                    id={`front${4 - index}`}
                                    strokeWidth={strokeWidth}
                                    strokeLinecap="round"
                                    key={index}
                                />
                            );
                        })}
                    </svg>
                </Link>
                <div
                    className="absolute z-50 left-[95px] backdrop-blur-lg backdrop-saturate-150 w-0 overflow-hidden opacity-0 border border-foreground shadow-lg rounded-lg shadow-shadow"
                    id="outerTooltip"
                    onMouseEnter={() => {
                        isHoveringTooltip.current = true;
                    }}
                    onMouseLeave={() => {
                        isHoveringTooltip.current = false;
                    }}
                >
                    <div
                        className="px-6 pt-4 pb-5 opacity-0 text-center"
                        id="innerTooltip"
                        style={{
                            width:
                                lessonTitle.length > 30
                                    ? "30ch"
                                    : "fit-content",
                            whiteSpace: "wrap",
                            wordBreak:
                                lessonTitle.length > 30
                                    ? "break-word"
                                    : "normal",
                        }}
                    >
                        <div className="text-sm_pl_pl font-semibold">
                            {lessonTitle}
                        </div>
                        <div className="">{lessonDescription}</div>
                    </div>
                </div>
            </div>
        );
    }
);
