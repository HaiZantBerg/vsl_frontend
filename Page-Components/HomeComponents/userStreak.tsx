"use client";

import { useState } from "react";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

const weeklyStreak = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const streakSquareLength = 90;
const dayStreakSquareLength = 80;
const streakToken = 70;

export default function UserStreak() {
    const [streak, setStreak] = useState(0);

    return (
        <Card className="bg-background border border-border2">
            <CardHeader className="px-4 pt-5">
                <svg
                    width={streakSquareLength}
                    height={streakSquareLength}
                    viewBox="-100 -100 200 200"
                >
                    <text
                        className="text-too_big font-medium"
                        dominantBaseline="middle"
                        textAnchor="middle"
                    >
                        {String(streak)}
                    </text>
                </svg>
                <div className="flex flex-col space-y-1.5">
                    <CardTitle className="font-semibold text-lg text-foreground">
                        Chuỗi
                    </CardTitle>
                    <CardDescription className="font-header3 text-[15px] text-muted-3">
                        {streak
                            ? `Tiếp tục chuỗi với việc hoàn thành bài học mỗi ngày`
                            : `Hoàn thành một bài học để tạo chuỗi`}
                    </CardDescription>
                </div>
            </CardHeader>
            <CardContent className="flex justify-between px-4 pb-5 pt-1">
                {weeklyStreak.map((day) => (
                    <svg
                        width={dayStreakSquareLength}
                        height={dayStreakSquareLength}
                        viewBox="-100 -100 200 200"
                        key={day}
                    >
                        <circle
                            cy={-20}
                            r={streakToken}
                            fill="var(--placeholder)"
                            strokeWidth={9}
                        ></circle>
                        <text
                            className="text-xl_pl"
                            textAnchor="middle"
                            y={120}
                        >
                            {day}
                        </text>
                    </svg>
                ))}
            </CardContent>
        </Card>
    );
}
