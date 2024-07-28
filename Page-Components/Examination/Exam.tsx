"use client";

import React from "react";
import { getExamData } from "@/axios/getExam";
import { examUrl } from "@/axios/endPoints";
import useSWR from "swr";
import Link from "next/link";
import { LandMarkButton } from "@/Page-Components/Examination";

interface Props {
    id: number;
    title: string;
    of_course: string;
    total_mark: number;
}

export default function Exam() {
    const { data, error, isLoading } = useSWR(examUrl(), (url) =>
        getExamData(url)
    );

    if (!error) {
        if (!isLoading && data) {
            return (
                <div>
                    <LandMarkButton />
                    {data.map((examData: Props) => (
                        <Link
                            href={`/courses/${examData.id}`}
                            key={examData.id}
                        >
                            <div>{examData.title}</div>
                            <div>{examData.of_course}</div>
                            <div>{examData.total_mark}</div>
                        </Link>
                    ))}
                </div>
            );
        }
    } else {
        return <div>Lỗi</div>;
    }
}
