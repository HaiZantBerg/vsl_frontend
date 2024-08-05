import React from "react";
import { Lesson } from "@/Page-Components/Subject";

export default function page({ params }: { params: { lessonId: string } }) {
    return (
        <>
            <Lesson
                id={`${params.lessonId}`}
                jj={[
                    "absolute top-[300px] left-10",
                    "absolute top-[300px] left-[400px]",
                ]}
            />
        </>
    );
}
