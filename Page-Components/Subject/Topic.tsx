"use client";

import React from "react";
import { TopicProps } from "./Subject";
import Chapter from "./Chapter";

export default function Topic({ topics }: { topics: TopicProps[] }) {
    return (
        <>
            {topics.map((topic: TopicProps) => {
                return (
                    <div key={topic.id}>
                        {!topic.no && (
                            <hr className="bg-muted-5 h-[2.5px] my-5" />
                        )}
                        <div className="text-md mb-4 font-semibold">
                            Chủ đề: {topic.title}
                        </div>
                        <div className="flex gap-8">
                            <Chapter
                                themeColor={topic.theme_color}
                                chapters={topic.chapters}
                            />
                        </div>
                    </div>
                );
            })}
        </>
    );
}
