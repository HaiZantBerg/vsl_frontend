"use client";

import React, { useState } from "react";
import { getQuestionData } from "@/axios/getExam";
import { examUrl } from "@/axios/endPoints";
import useSWR from "swr";
import { cn } from "@/lib/utils";
import useSubmitExam from "@/hooks/use-submit-exam";

interface questionProps {
    id: number;
    title: string;
    answer: string;
    examination: number;
    choices: [
        {
            id: number;
            title: string;
        }
    ];
}

export default function page({ id }: { id: string }) {
    const { data, error, isLoading } = useSWR([examUrl, id], (url) =>
        getQuestionData(url[0], url[1])
    );

    const [haveSubmitted, setHaveSubmitted] = useState(false);

    const [selectedChoice, setSelectedChoice] = useState<{
        [key: string]: number;
    }>({});

    const { onSubmit } = useSubmitExam();

    function handleSubmit() {
        if (!countUnfinishedQuestion.length) {
            onSubmit(selectedChoice, id);
        }
        setHaveSubmitted(true);
    }

    const countUnfinishedQuestion = Object.keys(selectedChoice).filter(
        (key) => selectedChoice[key] === 0
    );

    if (!error) {
        if (!isLoading && data) {
            const questionData = data.questions;

            if (Object.keys(selectedChoice).length === 0) {
                questionData.map((questionData: questionProps) => {
                    setSelectedChoice((array) => ({
                        ...array,
                        [questionData.id]: 0,
                    }));
                });
            }

            const clickHandler = (choiceId: number, questionId: number) => {
                setSelectedChoice((array) => ({
                    ...array,
                    [questionId]: choiceId,
                }));
            };

            return (
                <div className="w-full flex flex-col items-center">
                    {questionData.map((questionData: questionProps) => (
                        <div
                            key={questionData.id}
                            className="flex items-center flex-col"
                        >
                            <div
                                className={cn("", {
                                    "bg-red-400":
                                        countUnfinishedQuestion.includes(
                                            String(questionData.id)
                                        ) && haveSubmitted,
                                })}
                            >
                                {questionData.title}
                            </div>
                            <div className="flex gap-5">
                                {questionData.choices.map((choices) => (
                                    <button
                                        key={choices.id}
                                        className={cn(
                                            "bg-slate-600 text-white",
                                            {
                                                "bg-green-500":
                                                    selectedChoice[
                                                        questionData.id
                                                    ] === choices.id,
                                            }
                                        )}
                                        onClick={() =>
                                            clickHandler(
                                                choices.id,
                                                questionData.id
                                            )
                                        }
                                    >
                                        {choices.title}
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                    <button onClick={() => handleSubmit()}>Nộp bài</button>
                </div>
            );
        }
        return <div>...Đang tải</div>;
    } else {
        return <div>Lỗi</div>;
    }
}
