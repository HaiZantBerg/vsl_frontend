import React from "react";
import { motion } from "framer-motion";

function Svg1() {
    return (
        <>
            <div
                className="absolute -z-10 overflow-hidden"
                style={{
                    width: "1536px",
                    height: "729px",
                    perspective: "1000px",
                }}
            >
                <motion.div
                    style={{
                        transformStyle: "preserve-3d",
                    }}
                    initial={{
                        transform:
                            "rotateX(0deg) translateX(-90px) translateY(0px)",
                    }}
                    // animate={{
                    //     transform:
                    //         "rotateX(55deg) translateX(-60px) translateY(200px)",
                    // }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut",
                    }}
                >
                    <motion.svg
                        height={600}
                        width={1402}
                        className="absolute right-0 pointer-events-none z-50"
                        viewBox="-100 -100 200 200"
                        style={{
                            transform: "translateY(-5px)",
                        }}
                        initial={{
                            opacity: 0,
                        }}
                        // animate={{
                        //     opacity: 1,
                        // }}
                        transition={{
                            duration: 1.5,
                            ease: "easeOut",
                        }}
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
                                    stopColor="rgba(255,255,255, 1)"
                                />
                                <stop
                                    offset="60%"
                                    stopColor="rgba(255,255,255, 0.25)"
                                />
                                <stop
                                    offset="70%"
                                    stopColor="rgba(255,255,255, 0)"
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
                    </motion.svg>
                    <svg
                        width={1200}
                        height={729}
                        viewBox="-500 -364 1000 728"
                        className="absolute right-0"
                        style={{
                            transform: "translateX(100px)",
                        }}
                    >
                        <path
                            d="M-495 -364 L768 -364 L768 364 L-200 364 L-300 -70 Z"
                            stroke="black"
                            fill="none"
                            z={0}
                            strokeWidth={5}
                        />
                    </svg>
                </motion.div>
            </div>
        </>
    );
}

export const IntroductionSvg = {
    svg1: Svg1,
};
