"use client";

import React from "react";
import Chapter from "./Chapter";
import useSWR from "swr";

interface TopicProps {
    id: number;
    title: string;
    no: number;
    themeColor: string;
}

export default function Topic() {
    // const { data, isLoading, error } = useSWR("");

    const topics = [
        {
            id: 21,
            title: "Ai sợ thì đi về",
            no: 1,
            themeColor: "red",
        },
        // {
        //     id: 212,
        //     title: "Phogn Cachs",
        //     no: 2,
        //     themeColor: "pink",
        // },
    ];

    return (
        <>
            {topics.map((topic: TopicProps) => (
                <div key={topic.id}>
                    {topic.no > 1 && (
                        <hr className="bg-muted-5 h-[2.5px] my-5" />
                    )}
                    <div className="text-md mb-4 font-semibold">
                        Chủ đề: {topic.title}
                    </div>
                    <div className="flex gap-8">
                        <Chapter topicId={topic.no} />
                    </div>
                </div>
            ))}
        </>
    );
}
