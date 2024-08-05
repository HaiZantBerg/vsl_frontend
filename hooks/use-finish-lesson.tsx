import { finish_lesson } from "@/axios/postData";
import { useRouter } from "next/navigation";

export default function useFinishLesson() {
    const router = useRouter();

    const onSubmit = () => {
        finish_lesson()
            .then(() => {})
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                router.push(`/courses`);
            });
    };

    return {
        onSubmit,
    };
}
