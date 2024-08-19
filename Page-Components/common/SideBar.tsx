import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import LogOut from "./LogOut";
import { Avatar, Username } from "../OfUser/userData";

const iconSize = 35;

export default function SideBar() {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button className="px-2 py-2" name="sideBarButton">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        role="img"
                        color="#ffffff"
                    >
                        <path
                            d="M3 5C3 4.44772 3.44772 4 4 4L16 4C16.5523 4 17 4.44772 17 5C17 5.55229 16.5523 6 16 6L4 6C3.44772 6 3 5.55228 3 5Z"
                            fill="#ffffff"
                        ></path>
                        <path
                            d="M3 12C3 11.4477 3.44772 11 4 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L4 13C3.44772 13 3 12.5523 3 12Z"
                            fill="#ffffff"
                        ></path>
                        <path
                            d="M3 19C3 18.4477 3.44772 18 4 18L12 18C12.5523 18 13 18.4477 13 19C13 19.5523 12.5523 20 12 20L4 20C3.44772 20 3 19.5523 3 19Z"
                            fill="#ffffff"
                        ></path>
                    </svg>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="h-[42rem] w-[17rem] z-50 border-t border-t-ring1 text-accent-foreground flex flex-col *:flex *:flex-col font-body1 *:gap-3 justify-between">
                <div className="*:flex *:items-center">
                    <div>
                        <svg height={iconSize} width={iconSize}></svg>
                        <Link href="/courses">EduZone</Link>
                    </div>
                    <div>
                        <svg height={iconSize} width={iconSize}></svg>
                        <Link href="/research-area">Khu nghiêm cứu</Link>
                    </div>
                    <div>
                        <svg height={iconSize} width={iconSize}></svg>
                        <Link href="/community">Cộng đồng</Link>
                    </div>
                </div>
                <div className="*:flex *:items-center">
                    <div>
                        <svg height={iconSize} width={iconSize}></svg>
                        <LogOut className="text-start" />
                    </div>
                    <hr />
                    <Link
                        href={`/user/${"NiQ"}`}
                        className="inline-flex items-center gap-3 mr-24"
                    >
                        <Avatar scale={37.5} />
                        {/* <Username /> */}
                    </Link>
                </div>
            </PopoverContent>
        </Popover>
    );
}
