"use client";

import React, { useEffect } from "react";
import { examUrl } from "@/axios/endPoints";
import { getExamResult } from "@/axios/getExam";
import { useRouter } from "next/navigation";
import useSWR from "swr";

export default function page({ id }: { id: string }) {
    const router = useRouter();

    const { data, isLoading, error } = useSWR([examUrl(), id], (url) =>
        getExamResult(url[0], url[1])
    );

    useEffect(() => {
        if (error) {
            router.push("/courses");
        }
    }, [error]);

    if (!error) {
        if (!isLoading && data) {
            return (
                <div>
                    <div>{data.total_mark}</div>
                </div>
            );
        }
        return <div>...Đang tải</div>;
    }
    return null;
}
