"use client";

import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
    { month: "January", finishedLesson: 186 },
    { month: "February", finishedLesson: 305 },
    { month: "March", finishedLesson: 237 },
    { month: "April", finishedLesson: 73 },
    { month: "May", finishedLesson: 209 },
    { month: "June", finishedLesson: 214 },
];

const chartConfig = {
    finishedLesson: {
        label: "FinishedLesson",
        color: "#000",
    },
} satisfies ChartConfig;

export default function UserProgressChart() {
    return (
        <ChartContainer config={chartConfig} className="min-h-[500px] w-full">
            <AreaChart
                data={chartData}
                className="text-sm_pl"
                margin={{
                    left: 10,
                    right: 10,
                }}
            >
                <CartesianGrid vertical={false} />
                <XAxis
                    dataKey="month"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                    content={
                        <ChartTooltipContent
                            className="text-sm_pl w-44 border border-transparent1 "
                            hideIndicator={true}
                        />
                    }
                />
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
                    type="natural"
                    fillOpacity={0.4}
                    stroke="var(--foreground)"
                    strokeWidth={1.25}
                    stackId="a"
                />
            </AreaChart>
        </ChartContainer>
    );
}
