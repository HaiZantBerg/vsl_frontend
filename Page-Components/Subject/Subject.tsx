"use client";

import React from "react";
import useSWR from "swr";
import { courseUrl, topicUrl } from "@/axios/endPoints";
import { getCourseData, getCourseDetailData } from "@/axios/getCourse";
import Topic from "./Topic";

export interface LessonProps {
    id: number;
    title: string;
    no: number;
    content_quantity: number;
    // is_finished: boolean;
    // description: string;
}

export interface ChapterProps {
    id: number;
    title: string;
    no: number;
    summary: string;
    lessons: LessonProps[];
}

export interface TopicProps {
    id: number;
    title: string;
    no: number;
    theme_color: string;
    chapters: ChapterProps[];
}

interface SubjectProps {
    id: number;
    title: string;
    description: string;
    topics: TopicProps[];
}

export default function Subject() {
    const {
        data: courseData,
        error: courseError,
        isLoading: isCourseLoading,
    } = useSWR(courseUrl, (url) => getCourseData(url));

    if (!isCourseLoading && courseData) {
        return (
            <>
                {courseData.map((course: SubjectProps) => {
                    return (
                        <div key={course.id}>
                            <div className="text-center text-lg font-bold">
                                {course.title}
                            </div>
                            <div className="text-center">
                                {course.description}
                            </div>
                            <Topic topics={course.topics} />
                        </div>
                    );
                })}
            </>
        );
    }
}
