"use client";

import React from "react";
import { getLessonData } from "@/axios/getExam";
import useSWR from "swr";
import { lessonUrl } from "@/axios/endPoints";
import Image from "next/image";

interface Props {
    id: number;
    title: string;
    no: number;
    lesson: number;
    sections: {
        id: number;
        no: number;
        content?: string;
        alt?: string;
        image?: string;
        name?: string;
        className?: string;
    }[];
}

export default function Lesson({ id }: { id: string }) {
    const { data, isLoading, error } = useSWR([lessonUrl, id], (url) =>
        getLessonData(url[0], url[1])
    );

    if (!error) {
        if (!isLoading && data) {
            const lessonData = data.sections;

            return (
                <div>
                    {lessonData.map((section: Props) => (
                        <div key={section.id} className="h-almostfull">
                            <div className="text-center font-bold text-xl">
                                {section.title}
                            </div>
                            {section.sections.map((content) => (
                                <div key={content.id}>
                                    <div className={` ${content.className}`}>
                                        {content.content}
                                    </div>
                                    {content.alt && (
                                        <Image
                                            loader={() => {
                                                return `${process.env.NEXT_PUBLIC_HOST}${content.image}`;
                                            }}
                                            src={`localhost:8000${content.image}`}
                                            alt={content.alt}
                                            width={100}
                                            height={100}
                                        />
                                    )}
                                    {content.name && (
                                        <div>
                                            <div></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            );
        }
        return <div>Đang tải</div>;
    }
    return <div>Lỗi</div>;
}
