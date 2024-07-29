import Image from "next/image";
import logo from "@/public/image-removebg-preview (11).png";
import Link from "next/link";
import { RegLogStyle } from "@/Style";
import { RegisterForm } from "@/Page-Components/Form";

const page = () => {
    return (
        <div className={`${RegLogStyle.center} flex-col mt-10`}>
            <div className={`${RegLogStyle.center} flex-col`}>
                <Image
                    src={logo}
                    alt="Visual Subject Learning"
                    width={60}
                    priority
                />
                <h1 className="font-header1 text-mdpl mt-10">
                    Tạo tài khoản mới
                </h1>
            </div>

            <div
                className={`flex justify-between flex-col gap-[25px] mt-10 w-[500px] rounded-card shadow-[5px_5px_10px_rgba(0,0,0,0.3)] pb-[25px] pt-[30px] px-[37px] 
                    bg-muted`}
            >
                <RegisterForm />
                <p className="text-smpl text-center text-muted-foreground">
                    Đã có tài khoản?
                    <Link
                        href="/Login"
                        className="font-semibold ml-1 text-accent"
                    >
                        Đăng nhập tại đây!
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default page;
