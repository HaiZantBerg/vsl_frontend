"use client";

import { Area, AreaChart, XAxis } from "recharts";
import { motion } from "framer-motion";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { day: "Mon", finishedLesson: 0 },
    { day: "Tue", finishedLesson: 10 },
    { day: "Wed", finishedLesson: 1000 },
    { day: "Thu", finishedLesson: 100 },
    { day: "Fri", finishedLesson: 35 },
    { day: "Sat", finishedLesson: 70 },
    { day: "Sun", finishedLesson: 0 },
];

const chartConfig = {
    finishedLesson: {
        label: "FinishedLesson",
        color: "#000",
    },
} satisfies ChartConfig;

const highestFinishedLesson = chartData.reduce((max, current) => {
    return current.finishedLesson > max ? current.finishedLesson : max;
}, 0);
const highestNumber = () => {
    if (highestFinishedLesson > 100) {
        if (highestFinishedLesson % 10 === 0) {
            return highestFinishedLesson;
        }
        const stringNumber = String(highestFinishedLesson);

        return (
            (Math.floor(Number(stringNumber.slice(0, 2)) / 2) + 1) *
            Number("2" + "0".repeat(stringNumber.slice(2).length))
        );
    } else if (highestFinishedLesson % 4 === 0) {
        return highestFinishedLesson;
    }
    return (Math.floor(highestFinishedLesson / 4) + 1) * 4;
};
const numberGap = highestNumber() / 4;

const numberOfLine = 5;
const cartesianGridHeight = 201;
const cartesianGridWidth = 448;
const lineGap = cartesianGridHeight / numberOfLine;
const textMargin = 8;
const textMarginLeft = 35;
const chartMargin = 50;
const numberStartPos = 0;
const textDuration = 0.5;
const textGap = (cartesianGridWidth - chartMargin) / chartData.length + 1;
const dayStartPos = -23;
const lineDelay = 0.2;

export default function UserProgressChart() {
    return (
        <>
            <svg
                className="absolute"
                height={cartesianGridHeight + 40}
                width={cartesianGridWidth}
                viewBox={`0 0 ${cartesianGridWidth} ${
                    cartesianGridHeight + 15
                }`}
            >
                <g>
                    {[...Array.from(Array(numberOfLine - 1).keys())].map(
                        (line) => {
                            const cartesianGridY = (lineGap + 9.375) * line + 2;

                            return (
                                <g key={line}>
                                    <motion.text
                                        initial={{
                                            x: numberStartPos,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x:
                                                textMargin +
                                                numberStartPos +
                                                textMarginLeft,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            delay:
                                                (numberOfLine - line - 1) / 10,
                                            duration: textDuration,
                                        }}
                                        y={cartesianGridY - textMargin}
                                        dominantBaseline="middle"
                                        className="text-sm_pl"
                                        textAnchor="end"
                                    >
                                        {highestNumber() - numberGap * line}
                                    </motion.text>
                                    <motion.line
                                        x1={chartMargin}
                                        initial={{ x2: chartMargin }}
                                        animate={{
                                            x2:
                                                cartesianGridWidth -
                                                chartMargin,
                                        }}
                                        y1={cartesianGridY}
                                        y2={cartesianGridY}
                                        transition={{
                                            delay:
                                                (numberOfLine - line - 1) / 10 +
                                                lineDelay,
                                            duration: textDuration,
                                        }}
                                        stroke="var(--muted)"
                                    ></motion.line>
                                </g>
                            );
                        }
                    )}
                </g>
                <g>
                    <motion.text
                        initial={{
                            x: numberStartPos,
                            opacity: 0,
                        }}
                        animate={{
                            x: textMargin + numberStartPos + textMarginLeft,
                            opacity: 1,
                        }}
                        transition={{
                            duration: textDuration,
                        }}
                        y={cartesianGridHeight - textMargin}
                        dominantBaseline="middle"
                        className="text-sm_pl"
                        textAnchor="end"
                    >
                        0
                    </motion.text>
                    <motion.line
                        x1={chartMargin}
                        initial={{ x2: chartMargin }}
                        animate={{
                            x2: cartesianGridWidth - chartMargin,
                        }}
                        y1={cartesianGridHeight}
                        y2={cartesianGridHeight}
                        stroke="var(--foreground)"
                        strokeOpacity={0.7}
                        strokeWidth={2}
                        transition={{
                            duration: textDuration,
                            delay: lineDelay,
                        }}
                    ></motion.line>
                </g>
                <g>
                    {[...Array.from(Array(chartData.length).keys())].map(
                        (index) => {
                            const cartesianGridX =
                                textGap * index + chartMargin;

                            return (
                                <g key={index}>
                                    <motion.text
                                        x={cartesianGridX}
                                        initial={{
                                            y: cartesianGridHeight + 10,
                                            opacity: 0,
                                        }}
                                        animate={{
                                            y:
                                                cartesianGridHeight -
                                                dayStartPos,
                                            opacity: 1,
                                        }}
                                        transition={{
                                            duration: textDuration - 0.1,
                                            delay: index / 10,
                                        }}
                                        className="font-normal text-sm_pl"
                                        textAnchor="middle"
                                    >
                                        {chartData[index].day}
                                    </motion.text>
                                </g>
                            );
                        }
                    )}
                </g>
            </svg>
            <ChartContainer
                config={chartConfig}
                className="w-full z-10 mb-2 mt-1"
            >
                <AreaChart
                    data={chartData}
                    className="text-sm_pl"
                    margin={{
                        left: chartMargin,
                        right: chartMargin,
                        bottom: 39,
                        top: 15,
                    }}
                    width={400}
                    height={400}
                >
                    <ChartTooltip
                        content={
                            <ChartTooltipContent
                                className="text-sm_pl w-44 border border-transparent1 text-foreground"
                                hideIndicator={true}
                            />
                        }
                    />
                    <XAxis dataKey={"day"} hide />
                    <defs>
                        <linearGradient
                            id="areaGradient"
                            x1="0"
                            y1="0"
                            x2="0"
                            y2="1"
                        >
                            <stop
                                offset="5%"
                                stopColor="var(--color-finishedLesson)"
                                stopOpacity={0.8}
                            />
                            <stop
                                offset="95%"
                                stopColor="var(--color-finishedLesson)"
                                stopOpacity={0.1}
                            />
                        </linearGradient>
                    </defs>
                    <Area
                        dataKey="finishedLesson"
                        fill="url(#areaGradient)"
                        type="monotone"
                        fillOpacity={0.4}
                        stroke="var(--muted2)"
                        strokeWidth={1.25}
                        stackId="a"
                    />
                </AreaChart>
            </ChartContainer>
        </>
    );
}
