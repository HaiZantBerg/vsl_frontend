import IcosahedronCanvas from "@/Page-Components/3dObject/Icosahedron";
import Link from "next/link";

export default function Home() {
    class Woman {}
    const woman = new Woman();

    const lineHeight = [
        [-50, -25, 15, 40, 40, 15, -25, -50],
        [-35, 7, 30, 25, 25, 30, 7, -35],
        [-15, -16, 25, 30, 25, -16, -15],
    ];

    const lineX = [
        [-200, -140, -80, -20, 20, 80, 140, 200],
        [-170, -120, -68, -10, 10, 68, 120, 170],
        [-145, -100, -56, 0, 56, 100, 145],
    ];

    return (
        <>
            <div className="absolute w-screen z-10 group">
                <div className="px-16 pt-4 flex items-center justify-between">
                    <Link href="/">
                        <span className="font-bold text-xxl">VSL</span>
                        {/* <svg></svg> */}
                    </Link>
                    <div className="flex gap-8">
                        <Link
                            className="rounded-3xl font-header1 h-12 w-24 flex border-2 border-foreground"
                            href="/login"
                        >
                            <span className="m-auto text-sm_pl_pl">Log in</span>
                        </Link>
                        <Link
                            className="rounded-3xl font-header1 h-12 w-[135px] flex border-2 border-foreground"
                            href="/register"
                        >
                            <span className="m-auto text-sm_pl_pl">
                                Get started
                            </span>
                        </Link>
                    </div>
                </div>
                <h1 className="text-gt font-header1 text-foreground text-center pt-44">
                    *Slogan siêu ngầu*
                </h1>
                <h3 className="text-lg font-body1 text-foreground text-center">
                    *tóm tắt về website cũng siêu ngầu*
                </h3>
            </div>
            <svg
                width="100vw"
                height="770px"
                viewBox="-100 -100 200 210"
                className="z-10"
            >
                {[...Array.from(Array(lineHeight.length).keys())].map(
                    (linePos) => {
                        const paddingBottom = 115 - linePos * 15;

                        return (
                            <g
                                key={linePos}
                                strokeOpacity={linePos ? 1 / (linePos * 2) : 1}
                            >
                                {[
                                    ...Array.from(
                                        Array(lineHeight[linePos].length).keys()
                                    ),
                                ].map((line) => (
                                    <g key={line}>
                                        <defs>
                                            <linearGradient
                                                gradientUnits="userSpaceOnUse"
                                                id={`gradient-line${linePos}${line}`}
                                                x1="0"
                                                y1={
                                                    -(
                                                        Math.abs(
                                                            lineX[linePos][
                                                                line
                                                            ] / 20
                                                        ) ** 2
                                                    )
                                                }
                                                x2="0"
                                                y2={paddingBottom}
                                            >
                                                <stop
                                                    offset="0%"
                                                    stopColor="rgba(0, 0, 0, 1)"
                                                />
                                                <stop
                                                    offset="42%"
                                                    stopColor="rgba(0, 0, 0, 0.68)"
                                                />
                                                <stop
                                                    offset="60%"
                                                    stopColor="rgba(121, 121, 121, 0.49)"
                                                />
                                                <stop
                                                    offset="79%"
                                                    stopColor="rgba(202, 202, 202, 0.19)"
                                                />
                                                <stop
                                                    offset="92%"
                                                    stopColor="rgba(255, 255, 255, 0)"
                                                />
                                            </linearGradient>
                                        </defs>
                                        <path
                                            d={`M ${lineX[linePos][line]} 100 L ${lineX[linePos][line]} ${lineHeight[linePos][line]}`}
                                            stroke={`url(#gradient-line${linePos}${line})`}
                                            strokeWidth={1.5}
                                            strokeLinecap="round"
                                            fill="none"
                                        />
                                    </g>
                                ))}
                            </g>
                        );
                    }
                )}
                <defs>
                    <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="gradient-line"
                        x1="-205"
                        x2="205"
                        y1="0"
                        y2="0"
                    >
                        <stop offset="1%" stopColor="rgba(255, 255, 255, 0)" />
                        <stop offset="15%" stopColor="rgb(97, 97, 97)" />
                        <stop offset="85%" stopColor="rgb(97, 97, 97)" />
                        <stop offset="99%" stopColor="rgba(255, 255, 255, 0)" />
                    </linearGradient>
                </defs>
                <line
                    x1={-211}
                    x2={206}
                    y1={107.5}
                    y2={107.5}
                    stroke="url(#gradient-line)"
                    strokeWidth={1.5}
                />
            </svg>
            <div className="absolute top-[70px] -left-[115px] h-40 aspect-video -z-10">
                <IcosahedronCanvas shapeColor="red" rotatingSpeed={1.5} />
            </div>
            <div className=""></div>
        </>
    );
}
