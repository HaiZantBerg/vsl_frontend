import React from "react";
import { Lesson } from "@/Page-Components/Subject";
import ExitButton from "@/Page-Components/common/ExitButton";

export default function Page({ params }: { params: { lessonId: string } }) {
    return (
        <>
            <Lesson id={params.lessonId.split("-").at(-1)} />
            {/* <ExitButton /> */}
        </>
    );
}
