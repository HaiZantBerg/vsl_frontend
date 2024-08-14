import React from "react";
import useSWR from "swr";
import { communityUrl } from "@/axios/endPoints";
import { getCommunityData } from "@/axios/getCommunityData";

export default function Discussion({ id }: { id: string }) {
    // const { data, isLoading, error } = useSWR([communityUrl, id], (url) =>
    //     getCommunityData(url[0], url[1])
    // );

    // if (!error) {
    //     if (!isLoading && data) {
    //         const lessonData = data.sections;

    return (
        <div>
            <div>{id}</div>
        </div>
    );
    //     }
    //     return <div>Đang tải</div>;
    // }
    // return <div>Lỗi</div>;
}
