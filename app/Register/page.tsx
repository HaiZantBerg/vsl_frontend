import Image from "next/image";
import logo from "@/public/image-removebg-preview (11).png";
import Link from "next/link";
import { RegLogStyle } from "@/Page-Components/Style";
import { RegisterForm } from "@/Page-Components/Form";

const page = () => {
    return (
        <div className={`${RegLogStyle.center} flex-col`}>
            <div className={`${RegLogStyle.center} flex-col`}>
                <Image
                    src={logo}
                    alt="Visual Subject Learning"
                    width={60}
                    priority
                />
                <h1 className="font-[600] text-[30px] mt-[25px]">Sign up</h1>
            </div>

            <div
                className={`flex justify-between flex-col gap-[25px] mt-[25px] w-[500px] rounded-[10px] shadow-[5px_5px_10px_rgba(0,0,0,0.3)] p-[37px] 
                    bg-primary`}
            >
                <RegisterForm />
                <p className="text-sm text-center">
                    Đã có tài khoản?
                    <Link
                        href="/Login"
                        className="inline-block font-semibold ml-1"
                    >
                        Đăng nhập tại đây!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
