import React from "react";

export default function LandMark() {
    return (
        <div className="flex">
            <button className="peer w-[100px] h-[100px] bg-slate-400 rounded-[20px] border-b-black border-b-[10px]"></button>
            <div className="invisible w-[100px] h-[100px] bg-slate-400 peer-hover:visible"></div>
        </div>
    );
}
