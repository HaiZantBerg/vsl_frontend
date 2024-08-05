import React from "react";
import { Exam, Lessons } from "@/Page-Components/Subject";

export default function page() {
    const subjects = ["Vật lý"];
    const lessonPosition = [
        ["100", "120"],
        ["120", "415"],
    ];
    const examPosition = [
        ["12", "12"],
        ["45", "45"],
        ["12", "12"],
    ];

    return (
        <div>
            {[...Array.from(Array(subjects.length).keys())].map((id) => (
                <div key={subjects[id]}>
                    <p>{subjects[id]}</p>
                    <div className="h-almostfull">
                        <Lessons lessonPosition={lessonPosition} />
                        <Exam examPosition={examPosition} />
                    </div>
                </div>
            ))}
        </div>
    );
}
