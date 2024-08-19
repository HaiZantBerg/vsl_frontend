import DisplayDiscussion from "@/Page-Components/HomeComponents/displayDiscussion";
import UserProgressChart from "@/Page-Components/HomeComponents/userProgressChart";
import UserStreak from "@/Page-Components/HomeComponents/userStreak";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
} from "@/components/ui/card";

export default function page() {
    return (
        <div className="w-full flex justify-between px-72 py-10 gap-4 sm">
            <div
                className="flex flex-col items-center gap-6"
                suppressHydrationWarning={true}
            >
                <Card className="bg-background border border-border2 w-[450px]">
                    <CardHeader className="flex flex-col px-7 pt-4 mb-4">
                        <CardTitle className="font-semibold text-lg text-foreground">
                            hhh
                        </CardTitle>
                        <CardDescription className="font-header3 text-[15px] text-muted-3">
                            chưa biết viết j hết
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <UserProgressChart />
                    </CardContent>
                </Card>
                <Card className="bg-background border border-border2 text-foreground w-[450px]">
                    <CardHeader className="flex flex-col px-7 pt-4">
                        <CardTitle className="font-semibold text-lg text-foreground">
                            asdasd
                        </CardTitle>
                        <CardDescription className="font-header3 text-[15px] text-muted-3">
                            Cái gì đó?
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                        <DisplayDiscussion />
                    </CardContent>
                </Card>
            </div>
            <div className="w-[480px]">
                <UserStreak />
            </div>
        </div>
    );
}
