"use client";

import { useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Image from "next/image";

const prevNextBtnWidth = 70;
const svgArrowWidth = prevNextBtnWidth - 1.6;
const svgArrowXMin = svgArrowWidth / 2;

const svgArrowStartPos = 48;
const svgArrowPos1 = 7.5;
const svgArrowPos2 = 2;
const svgArrowPos3 = 5;
const svgArrowEndPos1 = svgArrowPos1 + svgArrowStartPos;
const svgArrowEndPos2 = svgArrowPos2 + svgArrowStartPos;

export default function DisplayDiscussion() {
    const discussionId = [
        {
            id: 69420,
            avt: "",
            alt: "T",
            username: "Tan",
            content: "Web rất đẹp:)",
        },
        {
            id: 1,
            avt: "",
            alt: "C",
            username: "concanaodo",
            content: "Web như cc",
        },
        {
            id: 666,
            avt: "",
            alt: "Q",
            username: "?",
            content: ".______.",
        },
    ];

    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

    const [isRightHovered, setIsRightHovered] = useState<boolean>();
    const handleMouseEnterRight = () => {
        setIsRightHovered(true);
    };
    const handleMouseLeaveRight = () => {
        setIsRightHovered(false);
    };

    const [isLeftHovered, setIsLeftHovered] = useState<boolean>();
    const handleMouseEnterLeft = () => {
        setIsLeftHovered(true);
    };
    const handleMouseLeaveLeft = () => {
        setIsLeftHovered(false);
    };

    return (
        <Carousel
            plugins={[plugin.current]}
            className="h-64 flex items-center w-[450px]"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={() => plugin.current.play(false)}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent className="pb-[19px] pt-[10px]">
                {discussionId.map((discussion) => (
                    <CarouselItem
                        key={discussion.id}
                        // className="border-y border-border2 h-[247px] w-[450px]"
                        className="h-[247px] w-[450px]"
                    >
                        <div className="flex flex-col">
                            <div className="pl-7 flex gap-2 pt-4">
                                <div
                                    style={{
                                        width: "37.5px",
                                        height: "37.5px",
                                    }}
                                    className="rounded-full overflow-hidden"
                                >
                                    {discussion.avt ? (
                                        <Image
                                            src={discussion.avt}
                                            alt=""
                                            width={37.5}
                                            height={37.5}
                                        />
                                    ) : (
                                        <span className="flex justify-center items-center h-full bg-slate-400">
                                            {discussion.alt}
                                        </span>
                                    )}
                                </div>
                                <span className="-mt-[6px] font-header3 text-foreground">
                                    {discussion.username}
                                </span>
                            </div>
                            <div className="pl-[73.5px] -mt-[18px]">
                                {discussion.content}
                            </div>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <div
                // className="*:h-[247px] *:cursor-default *:border *:border-border2 z-50 *:rounded-none *:top-0"
                className="*:h-[247px] *:cursor-default z-50 *:rounded-none *:top-0"
            >
                <CarouselPrevious
                    style={{
                        left: -0.25,
                    }}
                    className={`w-[${prevNextBtnWidth}px]`}
                    onMouseEnter={handleMouseEnterLeft}
                    onMouseLeave={handleMouseLeaveLeft}
                >
                    <svg
                        width={svgArrowWidth}
                        height={30}
                        viewBox={`-${svgArrowXMin} -15 ${svgArrowWidth} 30`}
                    >
                        <motion.path
                            initial={{
                                d: "M 0 0",
                            }}
                            animate={
                                isLeftHovered
                                    ? {
                                          d: `M ${svgArrowPos1} 0 L -${svgArrowPos1} 0 L -${svgArrowPos2} -${svgArrowPos3} M -${svgArrowPos1} 0 L -${svgArrowPos2} ${svgArrowPos3}`,
                                      }
                                    : {
                                          d: `M -${
                                              -svgArrowPos1 + svgArrowStartPos
                                          } 0 L -${svgArrowEndPos1} 0 L -${svgArrowEndPos2} -${svgArrowPos3} M -${svgArrowEndPos1} 0 L -${svgArrowEndPos2} ${svgArrowPos3}`,
                                      }
                            }
                            fill="none"
                            stroke="var(--foreground)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    </svg>
                </CarouselPrevious>
                <CarouselNext
                    style={{
                        right: -0.25,
                    }}
                    className={`w-[${prevNextBtnWidth}px]`}
                    onMouseEnter={handleMouseEnterRight}
                    onMouseLeave={handleMouseLeaveRight}
                >
                    <svg
                        width={svgArrowWidth}
                        height={30}
                        viewBox={`-${svgArrowXMin} -15 ${svgArrowWidth} 30`}
                    >
                        <motion.path
                            initial={{
                                d: "M 0 0",
                            }}
                            animate={
                                isRightHovered
                                    ? {
                                          d: `M -${svgArrowPos1} 0 L ${svgArrowPos1} 0 L ${svgArrowPos2} -${svgArrowPos3} M ${svgArrowPos1} 0 L ${svgArrowPos2} ${svgArrowPos3}`,
                                      }
                                    : {
                                          d: `M ${
                                              -svgArrowPos1 + svgArrowStartPos
                                          } 0 L ${svgArrowEndPos1} 0 L ${svgArrowEndPos2} -${svgArrowPos3} M ${svgArrowEndPos1} 0 L ${svgArrowEndPos2} ${svgArrowPos3}`,
                                      }
                            }
                            fill="none"
                            stroke="var(--foreground)"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                        />
                    </svg>
                </CarouselNext>
            </div>
        </Carousel>
    );
}
