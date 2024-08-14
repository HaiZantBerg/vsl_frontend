"use client";

import { useRef } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Discussion from "@/Page-Components/Community/discussion";
import Autoplay from "embla-carousel-autoplay";

export default function DisplayDiscussion() {
    const discussionId = [
        `
            Web như bth
                    --Tân--
        `,
        `
            như cc
                    --Một con cá nào đó--
        `,
        `
            .______. 
                    --?--
        `,
    ];
    const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

    return (
        <Carousel
            plugins={[plugin.current]}
            className="h-64 aspect-[4/3] rounded-lg border border-border2"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={() => plugin.current.play(false)}
            opts={{
                loop: true,
            }}
        >
            <CarouselContent>
                {discussionId.map((index) => (
                    <CarouselItem key={index}>
                        <div className="flex justify-center items-center aspect-[4/3] p-6 select-none">
                            {index}
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
