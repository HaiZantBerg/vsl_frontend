"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import SideBar from "./SideBar";
import {
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
    Tooltip,
} from "@/components/ui/tooltip";
import { Avatar } from "../OfUser/userData";
import ThemeToggle from "./ThemeToggle";
import useSWR from "swr";
import { getUserData } from "@/axios/getUserData";
import { accountUrl } from "@/axios/endPoints";

export default function NavBar() {
    const pathname = usePathname();
    const lastSegment = pathname.split("/").at(-1);

    const noNavBarRoutes = ["login", "register", "reset-password", ""];

    // const { data, isLoading, error } = useSWR(accountUrl, (url) =>
    // getUserData(url)
    // );

    if (
        noNavBarRoutes.includes(pathname.split("/")[1]) ||
        (pathname.split("/").includes("lesson") &&
            lastSegment &&
            /\d/.test(lastSegment))
    ) {
        return null;
    }

    return (
        <div className="h-16 bg-foreground flex items-center px-4 gap-6">
            <SideBar />
            <Link
                href="/home"
                className="text-secondary-foreground text-[25px] font-[650] flex items-center select-none"
            >
                <svg height={50} width={50}></svg>
                VSL
            </Link>
            <div className="grow flex items-center">
                <form className="ml-auto w-96 h-9 rounded-xl flex items-center justify-end pr-2 bg-muted-2">
                    <></>
                    <input
                        type="text"
                        className="w-11/12 bg-transparent outline-none placeholder-placeholder"
                        placeholder="Tìm kiếm"
                    />
                </form>
            </div>
            <ThemeToggle />
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger>
                        <Link href={`/user/${"NiQ"}`}>
                            <Avatar scale={37.5} />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className="h-6">
                        {/* {data && !error && !isLoading ? data[0].username : null} */}
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}
