import { submit_exam } from "@/axios/postData";
import { useRouter } from "next/navigation";

function sendChoices(selectedChoice: object) {
    const reformattedObject = Object.entries(selectedChoice).map((array) => ({
        id: Number(array[0]),
        choice: array[1],
    }));
    return reformattedObject;
}

export default function useSubmitExam() {
    const router = useRouter();

    const onSubmit = (selectedChoice: object, examId: string) => {
        submit_exam(sendChoices(selectedChoice), examId)
            .then(() => {
                router.push(`/courses/${examId}/result`);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return {
        onSubmit,
    };
}
