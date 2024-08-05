"use client";

import React from "react";
import { getExamData } from "@/axios/getExam";
import { examUrl } from "@/axios/endPoints";
import useSWR from "swr";
import Link from "next/link";

export default function Exam({ examPosition }: { examPosition: string[][] }) {
    const { data, error, isLoading } = useSWR(examUrl, (url) =>
        getExamData(url)
    );

    if (!error) {
        if (!isLoading && data) {
            return (
                <>
                    {[...Array.from(Array(data.length).keys())].map((id) => (
                        <div
                            key={data[id].id}
                            className="relative"
                            style={{
                                top: `${examPosition[id][0]}px`,
                                left: `${examPosition[id][1]}px`,
                            }}
                        >
                            <Link href={`/courses/${data[id].id}`}>
                                <div>{data[id].title}</div>
                            </Link>
                        </div>
                    ))}
                </>
            );
        }
        return <div>...Đang tải</div>;
    } else {
        return <div>Lỗi</div>;
    }
}
