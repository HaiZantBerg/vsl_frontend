"use client";

import React from "react";
import useSWR from "swr";
import { lessonUrl } from "@/axios/endPoints";
import { getLessonsData } from "@/axios/getExam";
import Link from "next/link";

export default function Lessons({
    lessonPosition,
}: {
    lessonPosition: string[][];
}) {
    const {
        data: lessonsData,
        isLoading,
        error,
    } = useSWR(lessonUrl, (url) => getLessonsData(url));

    if (!error) {
        if (!isLoading && lessonsData) {
            return (
                <>
                    {[...Array.from(Array(lessonsData.length).keys())].map(
                        (id) => (
                            <div
                                key={lessonsData[id].id}
                                className="relative"
                                style={{
                                    top: `${lessonPosition[id][0]}px`,
                                    left: `${lessonPosition[id][1]}px`,
                                }}
                            >
                                <Link
                                    href={`/courses/lesson/${lessonsData[id].id}`}
                                >
                                    <div>{lessonsData[id].title}</div>
                                </Link>
                            </div>
                        )
                    )}
                </>
            );
        }
        return <div>...Đang tải</div>;
    }
    return <div>Lỗi</div>;
}
