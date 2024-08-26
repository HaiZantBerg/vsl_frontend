import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ChapterProps } from "./Chapter";
import { cn } from "@/lib/utils";
import { motion, useMotionValue } from "framer-motion";

interface LessonProps extends ChapterProps {
    sections: {
        id: number;
        title: string;
        no: number;
        is_finished: boolean;
    }[];
}

const lessons = [
    {
        id: 1,
        title: "Vị trí của vật chuyển động tại các thời điểm",
        no: 1,
        content_quantity: 6,
        is_finished: true,
        description: "T không nhớ nội dung bài này (´。＿。｀)",
    },
    {
        id: 2,
        title: "Độ dịch chuyển",
        no: 2,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 3,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 4,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 5,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 6,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 7,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 8,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 9,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
    {
        id: 3,
        title: "Độ dịch chuyển",
        no: 10,
        content_quantity: 2,
        is_finished: false,
        description: "ăn 3 tô cơm 😋",
    },
];

export default function Lessons({ chapterId }: { chapterId?: number }) {
    const [lessonEnter, setlessonEnter] = useState<number>(0);
    const [rerenderTrigger, setRerenderTrigger] = useState<boolean>(false);

    const angle = useRef<number[]>([]);
    const sin = useRef<number[]>([]);
    const lineRef = useRef<(SVGLineElement | null)[]>([]);
    const x = useRef(0);
    const y1 = useRef<number[]>([]);
    const lessonAnchorRef = useRef<(HTMLAnchorElement | null)[]>([]);
    const lessonTooltipLeft = useRef<number[]>([]);
    const lessonTooltipTop = useRef<number[]>([]);
    const lineCoor = useRef<string>("");
    const lessonContainerRef = useRef<(HTMLDivElement | null)[]>([]);
    const lessonsRouteWidthRef = useRef<number>(0);
    const lessonsRouteHeightRef = useRef<number>(0);

    const strokeWidth = 20;
    const strokeOpacity = 0.85;

    useEffect(() => {
        [...Array.from(Array(lessons.length).keys())].map((no) => {
            [...Array.from(Array(20).keys())].map((index) => {
                sin.current[no] = Math.sin(no + index / 2) * 2.5;

                lineRef.current[index + 20 * no]?.setAttributeNS(
                    "",
                    "y2",
                    `${
                        y1.current[index + 20 * no] -
                        10 * Math.abs(sin.current[no]) ** 2
                    }`
                );
            });
        });
    }, []);

    useEffect(() => {
        console.log("re-rendered");
    });

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;

        if (lessonEnter) {
            interval = setInterval(() => {
                if (angle.current[lessonEnter] < 360) {
                    angle.current[lessonEnter] += 1;
                } else {
                    angle.current[lessonEnter] = 0;
                }
                const radians = angle.current[lessonEnter] * (Math.PI / 180);

                [...Array.from(Array(20).keys())].map((index) => {
                    const no = lessonEnter - 1;

                    sin.current[no] = Math.sin(radians + no + index / 2) * 2.5;

                    lineRef.current[index + 20 * no]?.setAttributeNS(
                        "",
                        "y2",
                        `${
                            y1.current[index + 20 * no] -
                            10 * Math.abs(sin.current[no]) ** 2
                        }`
                    );
                });
            }, 10);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [lessonEnter]);

    useEffect(() => {
        if (lessonContainerRef.current[1]) {
            setRerenderTrigger(true);
            lessonsRouteWidthRef.current =
                lessonContainerRef.current[1]?.offsetWidth;
            lessonsRouteHeightRef.current =
                lessonContainerRef.current[1]?.offsetHeight;
        }
        [...Array.from(Array(lessons.length + 1).keys())].map((index) => {
            if (lessonAnchorRef.current[index]) {
                const x = lessonAnchorRef.current[index].offsetLeft + 37;
                const y = lessonAnchorRef.current[index].offsetTop + 50;

                if (index - 1) {
                    lineCoor.current =
                        lineCoor.current +
                        "L" +
                        String(x) +
                        " " +
                        String(y) +
                        " ";
                } else {
                    lineCoor.current = "M" + String(x) + " " + String(y) + " ";
                }
            }
        });
    }, []);

    const handleMouseEnter = (index: number) => {
        setlessonEnter(index);
        if (lessonAnchorRef.current[index]) {
            lessonTooltipLeft.current[index] =
                lessonAnchorRef.current[index].offsetLeft + 65;
            lessonTooltipTop.current[index] =
                lessonAnchorRef.current[index].offsetTop + 10;
        }
    };

    return (
        <>
            {rerenderTrigger && (
                <svg
                    width={lessonsRouteWidthRef.current * 4}
                    height={lessonsRouteHeightRef.current * 3}
                    viewBox={`0 0 ${lessonsRouteWidthRef.current * 4} ${
                        lessonsRouteHeightRef.current * 3
                    }`}
                    className="absolute pointer-events-none"
                >
                    <path
                        d={lineCoor.current}
                        stroke="black"
                        strokeWidth={3}
                        fill="none"
                    />
                </svg>
            )}
            {lessons.map((lesson) => {
                return (
                    <div
                        className="flex-[1_0_25%] flex h-96 group"
                        ref={(el) => {
                            lessonContainerRef.current[lesson.no] = el;
                        }}
                        key={lesson.no}
                    >
                        <Link
                            href={`/courses/lesson/${lesson.no}`}
                            className="h-[75px] aspect-square peer z-10"
                            ref={(el) => {
                                lessonAnchorRef.current[lesson.no] = el;
                            }}
                            onMouseEnter={() => handleMouseEnter(lesson.no)}
                            onMouseLeave={() => setlessonEnter(0)}
                        >
                            <svg
                                width={75}
                                height={75}
                                viewBox="-100 -100 200 200"
                            >
                                {/* Phía sau */}
                                {[...Array.from(Array(5).keys())].map(
                                    (index) => {
                                        x.current = -10 - 20 * index;
                                        y1.current[
                                            index + 20 * (lesson.no - 1)
                                        ] = (-2 / 5) * x.current;

                                        return (
                                            <line
                                                ref={(el) => {
                                                    lineRef.current[
                                                        index +
                                                            20 * (lesson.no - 1)
                                                    ] = el;
                                                }}
                                                x1={x.current}
                                                x2={x.current}
                                                y1={
                                                    y1.current[
                                                        index +
                                                            20 * (lesson.no - 1)
                                                    ]
                                                }
                                                className={cn(
                                                    lesson.is_finished
                                                        ? `stroke-green-300 transition group-has-[a:hover]:stroke-green-400 group-has-[.tooltip:hover]:stroke-green-400 duration-500`
                                                        : `stroke-slate-400 transition group-has-[a:hover]:stroke-red-400 group-has-[.tooltip:hover]:stroke-red-400 duration-500`
                                                )}
                                                strokeWidth={strokeWidth}
                                                strokeLinecap="round"
                                                strokeOpacity={strokeOpacity}
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                                {[...Array.from(Array(5).keys())].map(
                                    (index) => {
                                        x.current = 90 - 20 * index;
                                        y1.current[
                                            index + 20 * (lesson.no - 1) + 15
                                        ] = (2 / 5) * x.current;

                                        return (
                                            <line
                                                ref={(el) => {
                                                    lineRef.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            15
                                                    ] = el;
                                                }}
                                                x1={x.current}
                                                x2={x.current}
                                                y1={
                                                    y1.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            15
                                                    ]
                                                }
                                                className={cn(
                                                    lesson.is_finished
                                                        ? `stroke-green-300 transition group-has-[a:hover]:stroke-green-400 group-has-[.tooltip:hover]:stroke-green-400 duration-500`
                                                        : `stroke-slate-400 transition group-has-[a:hover]:stroke-red-400 group-has-[.tooltip:hover]:stroke-red-400 duration-500`
                                                )}
                                                strokeWidth={strokeWidth}
                                                strokeLinecap="round"
                                                strokeOpacity={strokeOpacity}
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                                {/* Phía trước */}
                                {[...Array.from(Array(5).keys())].map(
                                    (index) => {
                                        x.current = -90 + 20 * index;
                                        y1.current[
                                            index + 20 * (lesson.no - 1) + 5
                                        ] = (2 / 5) * x.current + 80;

                                        return (
                                            <line
                                                ref={(el) => {
                                                    lineRef.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            5
                                                    ] = el;
                                                }}
                                                x1={x.current}
                                                x2={x.current}
                                                y1={
                                                    y1.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            5
                                                    ]
                                                }
                                                className={cn(
                                                    lesson.is_finished
                                                        ? `stroke-green-400 transition group-has-[a:hover]:stroke-green-500 group-has-[.tooltip:hover]:stroke-green-500 duration-500`
                                                        : `stroke-slate-500 transition group-has-[a:hover]:stroke-red-500 group-has-[.tooltip:hover]:stroke-red-500 duration-500`
                                                )}
                                                strokeWidth={strokeWidth}
                                                strokeLinecap="round"
                                                strokeOpacity={strokeOpacity}
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                                {[...Array.from(Array(5).keys())].map(
                                    (index) => {
                                        x.current = 10 + 20 * index;
                                        y1.current[
                                            index + 20 * (lesson.no - 1) + 10
                                        ] = (-2 / 5) * x.current + 80;

                                        return (
                                            <line
                                                ref={(el) => {
                                                    lineRef.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            10
                                                    ] = el;
                                                }}
                                                x1={x.current}
                                                x2={x.current}
                                                y1={
                                                    y1.current[
                                                        index +
                                                            20 *
                                                                (lesson.no -
                                                                    1) +
                                                            10
                                                    ]
                                                }
                                                className={cn(
                                                    lesson.is_finished
                                                        ? `stroke-green-400 transition group-has-[a:hover]:stroke-green-500 group-has-[.tooltip:hover]:stroke-green-500 duration-500`
                                                        : `stroke-slate-500 transition group-has-[a:hover]:stroke-red-500 group-has-[.tooltip:hover]:stroke-red-500 duration-500`
                                                )}
                                                strokeWidth={strokeWidth}
                                                strokeLinecap="round"
                                                strokeOpacity={strokeOpacity}
                                                key={index}
                                            />
                                        );
                                    }
                                )}
                            </svg>
                        </Link>
                        <div
                            className={cn(
                                lessonEnter === lesson.no
                                    ? "pointer-events-auto"
                                    : "pointer-events-none",
                                `tooltip absolute z-20`
                            )}
                            onMouseEnter={() => handleMouseEnter(lesson.no)}
                            onMouseLeave={() => setlessonEnter(0)}
                            style={{
                                top: lessonTooltipTop.current[lesson.no],
                                left: lessonTooltipLeft.current[lesson.no],
                            }}
                        >
                            <div className="ml-4 text-center text-wrap pt-3 pb-4 max-w-64 px-5 backdrop-blur-lg backdrop-brightness-110 backdrop-saturate-200 border border-muted-4 opacity-0 shadow-2xl rounded-md transition-opacity group-has-[a:hover]:opacity-100 hover:opacity-100 group-has-[.tooltip:hover]:opacity-100">
                                <div className="font-semibold text-sm_pl_pl ">
                                    {lesson.title}
                                </div>
                                <div>{lesson.description}</div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
