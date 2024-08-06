import { Result } from "@/Page-Components/Subject";
import React from "react";

export default function page({ params }: { params: { practiceId: string } }) {
    return (
        <div>
            <Result id={`${params.practiceId}`} />
        </div>
    );
}
