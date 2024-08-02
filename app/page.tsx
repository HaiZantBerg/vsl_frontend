import { firstPageStyle } from "@/Style";
import Link from "next/link";

export default function Home() {
    class Woman {}
    const woman = new Woman();

    const lineHeight = [
        [20, 10, 3, 6, 3.5, 12, 18],
        [12, 7, 2, 3.5, 6, 14],
        [14, 16, 7, 6, 8, 6, 12, 8],
    ];

    const paddingLines = [
        [12, 34, 35, 34, 23, 40, 90],
        [52, 43, 60, 23, 30, 69],
        [46, 30, 40, 15, 54, 34, 57, 26],
    ];

    return (
        <>
            <div className="absolute w-screen z-10">
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
                            <span className="m-auto text-sm_pl">Log in</span>
                        </Link>
                        <Link
                            className="rounded-3xl font-header1 h-12 w-24 flex border-2 border-foreground"
                            href="/register"
                        >
                            <span className="m-auto text-sm_pl">Sign up</span>
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
            <div
                className="*:row-span-full *:col-span-full grid z-0"
                style={{
                    gridTemplateRows: "729.6px",
                    gridTemplateColumns: "100vw",
                }}
            >
                {[...Array.from(Array(lineHeight.length).keys())].map(
                    (linesPosition) => (
                        <div
                            key={linesPosition}
                            className="grid items-end *:row-span-full"
                            style={{
                                opacity: `calc(1/${
                                    linesPosition ** 2 * 2.3 + 1
                                })`,
                                paddingBottom: `calc(${linesPosition}px * 20)`,
                            }}
                        >
                            {[
                                ...Array.from(
                                    Array(
                                        lineHeight[linesPosition].length
                                    ).keys()
                                ),
                            ].map((line) => (
                                <div
                                    key={line}
                                    className={`w-1 ${firstPageStyle.line2} rounded-full relative`}
                                    style={{
                                        height: `calc(${lineHeight[linesPosition][line]}px * 100/4)`,
                                        left: `${paddingLines[linesPosition][line]}%`,
                                    }}
                                ></div>
                            ))}
                        </div>
                    )
                )}
            </div>
            <div className={`${firstPageStyle.line1} h-1 mt-[20px]`}></div>
            <div className=""></div>
        </>
    );
}
