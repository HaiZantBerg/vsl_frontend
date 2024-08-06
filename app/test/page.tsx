"use client";

import Input from "@/animation/input/Input";
import { useState, useEffect } from "react";
import {
    Line,
    LineChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function VelocityGraph() {
    const [velocity, setVelocity] = useState(0);
    const [runTimer, setRunTimer] = useState(false);
    const [time, setTime] = useState(0);
    const [distance, setDistance] = useState(0);
    const [chartData, setChartData] = useState<
        {
            time: number;
            distance: number;
        }[]
    >([
        {
            time: 0,
            distance: 0,
        },
    ]);

    useEffect(() => {
        let timer: any;
        if (runTimer) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        } else {
            clearInterval(timer);
        }
        return () => {
            clearInterval(timer);
        };
    }, [runTimer]);

    useEffect(() => {
        if (runTimer) {
            const newDistance = distance + velocity;
            setDistance(newDistance);
            setChartData((prevData) => [
                ...prevData,
                { time: time, distance: newDistance },
            ]);
        }
    }, [time]);

    const handleStart = () => {
        setRunTimer(true);
    };

    const handleStop = () => {
        setRunTimer(false);
    };

    return (
        <div className="flex *:grow">
            <div>
                <div className="flex flex-col">
                    Thời gian: {time} giây
                    <Input
                        value={velocity}
                        set={setVelocity}
                        unit="m/s"
                        min={0}
                    >
                        Tốc độ:
                    </Input>
                    Quãng đường: {distance} m
                </div>
                <div>
                    <button onClick={handleStart}>Start</button>
                    <button onClick={handleStop}>Stop</button>
                    <button
                        onClick={() => {
                            setTime(0);
                            setDistance(0);
                            setChartData([]);
                        }}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div>
                {time >= 0 && (
                    <LineChart data={chartData} width={300} height={300}>
                        {/* <CartesianGrid /> */}
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line dataKey="distance" />
                    </LineChart>
                )}
            </div>
        </div>
    );
}
