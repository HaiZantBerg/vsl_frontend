"use client";

import { useRef } from "react";
import LessonButton from "./LessonButton";
import { LessonProps } from "./Subject";

export default function LessonsRoute({
    themeColor,
    lessons,
}: {
    themeColor: string;
    lessons: LessonProps[];
}) {
    const lessonAnchorRef = useRef<(HTMLAnchorElement | null)[]>([]);

    return (
        <div className="flex items-center justify-between">
            {lessons.map((lesson: LessonProps) => {
                return (
                    <div key={lesson.no} className="h-fit group">
                        <LessonButton
                            // isFinished={lesson.is_finished}
                            lessonNo={lesson.no}
                            lessonTitle={lesson.title}
                            // lessonDescription={lesson.description}
                            themeColor={themeColor}
                            lessonId={lesson.id}
                            ref={(ref) => {
                                lessonAnchorRef.current[lesson.no] = ref;
                            }}
                        />
                    </div>
                );
            })}
        </div>
    );
}
