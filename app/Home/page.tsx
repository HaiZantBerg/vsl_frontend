import DisplayDiscussion from "@/Page-Components/HomeComponents/displayDiscussion";
import UserProgressChart from '@/Page-Components/HomeComponents/userProgressChart'

export default function page() {
    return (
        <div className="w-full h-almostfull flex justify-center">
            <div className="flex flex-col items-center">
                <span>
                    Chủ đề thảo luận tiêu biểu(chưa biết đặt tên j hết ok:))
                </span>
                <DisplayDiscussion />
            </div>
            <div className="">
                <UserProgressChart/>
            </div>
        </div>
    );
}
