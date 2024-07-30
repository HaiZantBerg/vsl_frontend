import { others } from "@/Style";

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
        <div className="flex flex-col">
            <div className="flex flex-col *:flex *:flex-col *:items-center h-[665.6px]">
                <div className="h-full w-full">
                    <div className="flex flex-col items-center absolute top-0 justify-center h-[729.6px] z-10">
                        <div className="shadow-[0_0_100px_50px_rgb(255,255,255)] absolute z-0 w-full"></div>
                        <span className="text-gt font-header1 text-foreground z-10">
                            *Slogan siêu ngầu*
                        </span>
                        <span className="text-lg font-body1 text-foreground z-10">
                            *tóm tắt về website cũng siêu ngầu*
                        </span>
                    </div>
                    <div className="w-full flex flex-col h-full items-center">
                        <div className="w-full h-full *:h-[665.6px]">
                            {[
                                ...Array.from(Array(lineHeight.length).keys()),
                            ].map((linesPosition) => (
                                <div
                                    key={linesPosition}
                                    className={`w-full flex absolute`}
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
                                            className={`h-full w-full flex items-end`}
                                        >
                                            <div
                                                className={`w-1 ${others.line2} rounded-full relative`}
                                                style={{
                                                    height: `calc(${lineHeight[linesPosition][line]}px * 100/4)`,
                                                    left: `${paddingLines[linesPosition][line]}%`,
                                                }}
                                            ></div>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${others.line1} w-full h-1 mt-[20px]`}></div>
            <div className="w-full"></div>
        </div>
    );
}
