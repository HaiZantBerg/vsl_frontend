import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Lessons from "./Lessons";
import { lessonUrl } from "@/axios/endPoints";
import { getLessonsData } from "@/axios/getLesson";
import useSWR from "swr";

export interface ChapterProps {
    id: number;
    title: string;
    no: number;
}

const strokeSize = 40;
const lessonCardWidth = 160;
const lessonCardHeight = 180;
const outerStrokePos1 = lessonCardHeight - strokeSize;
const outerStrokePos2 = lessonCardWidth - strokeSize;
const strokeWidth = strokeSize / 8;
const strokeMarginY = lessonCardHeight - strokeWidth / 2;
const strokeMarginX = lessonCardWidth - strokeWidth / 2;

const data = [
    {
        id: 1,
        title: "Độ dịch chuyển và quãng đường đi được",
        no: 1,
        course: 1,
    },
    {
        id: 21,
        title: "hí hí",
        no: 2,
        course: 1,
    },
];

export default function Chapter({ topicId }: { topicId: number }) {
    // const { data, error, isLoading } = useSWR(lessonUrl, (url) =>
    //     getLessonsData(url)
    // );

    // if (error) {
    // }

    const dialogRef = useRef<(HTMLDialogElement | null)[]>([]);
    const isDialogEnter = useRef<boolean[]>([]);
    const [openDialogIndex, setOpenDialogIndex] = useState<number | null>(null);

    const handleOpen = (index: number) => {
        document.body.classList.add("modal-open");
        setOpenDialogIndex(index);
        dialogRef.current[index]?.showModal();
        localStorage.setItem("chapter-modal", String(index));
    };

    const handleClose = (index: number) => {
        document.body.classList.remove("modal-open");
        setOpenDialogIndex(null);
        dialogRef.current[index]?.close();
        localStorage.setItem("chapter-modal", "0");
    };

    const handleBackdropClick = (index: number) => {
        if (!isDialogEnter.current[index]) {
            document.body.classList.remove("modal-open");
            setOpenDialogIndex(null);
            dialogRef.current[index]?.close();
            localStorage.setItem("chapter-modal", "0");
        }
    };
    const handleMouseEnter = (index: number) => {
        isDialogEnter.current[index] = true;
    };
    const handleMouseLeave = (index: number) => {
        isDialogEnter.current[index] = false;
    };

    useEffect(() => {
        const openDialog = Number(localStorage.getItem("chapter-modal"));
        if (openDialog) {
            document.body.classList.add("modal-open");
            setOpenDialogIndex(openDialog);
            dialogRef.current[openDialog]?.showModal();
        }
    }, []);

    // if (data && !isLoading) {
    return (
        <>
            {data.map((chapter: ChapterProps) => (
                <div key={chapter.id}>
                    <Button
                        size="none"
                        className="bg-transparent shadow-none"
                        onClick={() => handleOpen(chapter.id)}
                    >
                        <svg
                            width={lessonCardWidth}
                            height={lessonCardHeight}
                            viewBox={`-${lessonCardWidth} -${lessonCardHeight} ${
                                lessonCardWidth * 2
                            } ${lessonCardHeight * 2}`}
                            className="group"
                        >
                            <foreignObject
                                x={-140}
                                y={-60}
                                width={280}
                                height={60}
                            >
                                <div className="text-xl font-header2 whitespace-normal text-foreground transition group-hover:text-muted-2 duration-200 ease-out group-active:group-hover:translate-y-2">
                                    Chương {chapter.no}
                                </div>
                            </foreignObject>
                            <foreignObject
                                x={-140}
                                y={0}
                                width={280}
                                height={160}
                            >
                                <div className="text-md_pl font-medium whitespace-normal text-foreground transition group-hover:text-muted duration-200 ease-out group-active:group-hover:translate-y-2">
                                    {chapter.title}
                                </div>
                            </foreignObject>
                            <g>
                                <path
                                    d={`M-${outerStrokePos2} -${strokeMarginY} L${outerStrokePos2} -${strokeMarginY} L${strokeMarginX} -${outerStrokePos1} L${strokeMarginX} ${
                                        outerStrokePos1 - 12.5
                                    } L${outerStrokePos2} ${
                                        strokeMarginY - 12.5
                                    } L-${outerStrokePos2} ${
                                        strokeMarginY - 12.5
                                    } L-${strokeMarginX} ${
                                        outerStrokePos1 - 12.5
                                    } L-${strokeMarginX} -${outerStrokePos1} Z`}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    className="stroke-foreground transition group-hover:stroke-muted duration-200 ease-out group-active:group-hover:translate-y-2"
                                    fill="none"
                                />
                                <path
                                    d={`M${strokeMarginX} ${outerStrokePos1} L${outerStrokePos2} ${strokeMarginY} L-${outerStrokePos2} ${strokeMarginY} L-${strokeMarginX} ${outerStrokePos1}
                                            L-${strokeMarginX} ${
                                        outerStrokePos1 - 12.5
                                    } L-${outerStrokePos2} ${
                                        strokeMarginY - 12.5
                                    } L${outerStrokePos2} ${
                                        strokeMarginY - 12.5
                                    } L${strokeMarginX} ${
                                        outerStrokePos1 - 12.5
                                    } Z`}
                                    strokeWidth={strokeWidth}
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    className="stroke-foreground peer transition group-hover:stroke-muted group-hover:fill-muted duration-200 ease-out group-active:group-hover:translate-y-2 group-active:group-hover:opacity-0"
                                />
                            </g>
                        </svg>
                    </Button>
                    <dialog
                        className="overflow-hidden w-full h-full backdrop:bg-black backdrop:opacity-75 rounded-xl"
                        ref={(el) => {
                            dialogRef.current[chapter.no] = el;
                        }}
                        onClick={() => handleBackdropClick(chapter.no)}
                    >
                        <div
                            className="w-full h-full flex flex-col px-12 py-8 z-10"
                            onMouseLeave={() => handleMouseLeave(chapter.no)}
                            onMouseEnter={() => handleMouseEnter(chapter.no)}
                        >
                            <div className="overflow-y-auto overflow-x-hidden grow flex flex-wrap justify-evenly relative">
                                {openDialogIndex === chapter.no && (
                                    <Lessons chapterId={chapter.id} />
                                )}
                            </div>
                            <svg
                                height={100}
                                width={1402}
                                className="absolute bottom-[70px] pointer-events-none"
                                viewBox="-100 -100 200 200"
                            >
                                <defs>
                                    <linearGradient
                                        gradientUnits="userSpaceOnUse"
                                        id="gradient"
                                        x1={0}
                                        x2={0}
                                        y1={-100}
                                        y2="100%"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="rgba(255,255,255, 0)"
                                        />
                                        <stop
                                            offset="40%"
                                            stopColor="rgba(255,255,255, 0.75)"
                                        />
                                        <stop
                                            offset="60%"
                                            stopColor="rgba(255,255,255, 1)"
                                        />
                                    </linearGradient>
                                </defs>
                                <rect
                                    x={-1402}
                                    y={-100}
                                    width={2804}
                                    height={200}
                                    fill="url(#gradient)"
                                />
                            </svg>
                            <div className="mt-1">
                                <Button
                                    className="bg-foreground rounded-lg text-background text-sm_pl py-3 pr-5 pl-3"
                                    onClick={() => handleClose(chapter.no)}
                                >
                                    <div className="flex items-center gap-1 text-background">
                                        <ArrowLeft />
                                        Quay trở lại
                                    </div>
                                </Button>
                            </div>
                        </div>
                    </dialog>
                </div>
            ))}
        </>
    );
}
