import React from "react";
import { Lesson } from "@/Page-Components/Subject";

export default function page({ params }: { params: { lessonId: string } }) {
    return (
        <>
            <Lesson id={`${params.lessonId}`} />
        </>
    );
}
