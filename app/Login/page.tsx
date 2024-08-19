import { RegLogStyle } from "@/Style";
import Image from "next/image";
import logo from "@/public/image-removebg-preview (11).png";
import Link from "next/link";
import { LoginForm } from "@/Page-Components/Form";

export default function Login() {
    return (
        <div className={`${RegLogStyle.center} flex-col mt-10`}>
            <div className={`${RegLogStyle.center} flex-col`}>
                <Link href="/">
                    <Image
                        src={logo}
                        alt="Visual Subject Learning"
                        width={60}
                        priority
                    />
                </Link>
                <h1 className="font-header1 text-md_pl mt-10">
                    Đăng nhập tài khoản
                </h1>
            </div>
            <div
                className="flex flex-col gap-6 mt-10 w-[500px] rounded-card shadow-[5px_5px_10px_rgba(0,0,0,0.3)] pb-[25px] pt-[25px] px-[37px] 
                bg-muted-4"
            >
                <LoginForm />
                <p className="text-smpl text-center text-muted-foreground">
                    Bạn là thành viên mới?
                    <Link
                        href="/register"
                        className="font-semibold text-accent ml-1"
                    >
                        Đăng kí tại đây!
                    </Link>
                </p>
            </div>
        </div>
    );
}
