import React from "react";
import { Questions } from "@/Page-Components/Examination";

export default function page({ params }: { params: { practiceId: string } }) {
    return <Questions id={`${params.practiceId}`} />;
}
