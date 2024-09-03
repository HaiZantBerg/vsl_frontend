"use client";

import React from "react";
// import useSWR from "swr";
// import { getCourseDetailData } from "@/axios/getCourse";
// import { lessonUrl } from "@/axios/endPoints";
import { LessonProps } from "./Subject";
import { Components } from "./LessonType/ComponentMap";

export interface ContentProps {
    header?: string;
    svgId?: string;
    graphType?: string[];
    flexDirection?: string;
    text1?: string;
    className?: string;
    textPos?: string;
}

interface SectionProps {
    sections: {
        id: number;
        no: number;
        content: ContentProps;
        type:
            | "introduction"
            | "keyKnowledge"
            | "example"
            | "observation"
            | "complicatedQuiz"
            | "ezQuiz"
            | "keyPointsAndConclusion";
    }[];
}

const data: LessonProps & SectionProps = {
    id: 1,
    title: "Độ dịch chuyển",
    no: 0,
    content_quantity: 1,
    sections: [
        {
            id: 1,
            no: 0,
            content: {
                header: "Độ dịch chuyển",
                text1: `hello
                hello 
                ewew
                wewe`,
                flexDirection: "right",
                svgId: "svg1",
                className: "relative top-0 pl-32",
                textPos: "start",
            },
            type: "introduction",
        },
    ],
};

export default function Lesson({ id }: { id: string | undefined }) {
    // const { data, error, isLoading } = useSWR([lessonUrl, id], (url) =>
    //     getCourseDetailData(url[0], url[1])
    // );

    // if (data && isLoading) {
    const sections = data.sections;

    return (
        <>
            {sections.map((section) => {
                const Component =
                    Components[section.type as keyof typeof Components];
                return Component ? (
                    <Component key={section.id} content={section.content} />
                ) : (
                    <div key={section.id}>Component not found</div>
                );
            })}
        </>
    );
    // }
}
