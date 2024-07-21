import { RegLogStyle } from "@/Page-Components/Style";
import Image from "next/image";
import logo from "@/public/image-removebg-preview (11).png";
import Link from "next/link";
import { LoginForm } from "@/Page-Components/Form";

export default function Login() {
    return (
        <div className={`${RegLogStyle.center} flex-col`}>
            <div className={`${RegLogStyle.center} flex-col`}>
                <Image
                    src={logo}
                    alt="Visual Subject Learning"
                    width={60}
                    priority
                />
                <h1 className="font-[600] text-[20px] mt-10">
                    Tạo tài khoản mới
                </h1>
            </div>

            <div
                className={`flex flex-col gap-[25px] mt-10 w-[500px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.3)] p-[37px] 
                bg-primary`}
            >
                <LoginForm />
                <p className="text-sm text-center">
                    Bạn là thành viên mới?
                    <Link
                        href="/Register"
                        className="inline-block font-semibold ml-1"
                    >
                        Đăng kí tại đây!
                    </Link>
                </p>
            </div>
        </div>
    );
}
