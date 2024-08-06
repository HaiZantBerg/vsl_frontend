import React from "react";
import { Questions } from "@/Page-Components/Subject";

export default function page({ params }: { params: { practiceId: string } }) {
    return (
        <div>
            <Questions id={`${params.practiceId}`} />;
        </div>
    );
}
