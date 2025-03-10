import HomeIcon from "@/icons/HomeIcon";
import PeopleIcon from "@/icons/PeopleIcon";
import SettingsIcon from "@/icons/SettingsIcon";
import UserIcon from "@/icons/UserIcon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import SignOutButton from "../SignOutButtion";

const NavBar: React.FC = () => {
  const path = usePathname();
  const { data: session } = useSession();


  const headerGradients = [
    // Professional dark gradients
    "bg-gradient-to-r from-[#1a2a6c] to-[#2d3436]",      // Deep Navy to Charcoal
    "bg-gradient-to-r from-[#003973] to-[#2c3e50]",      // Ocean Blue to Midnight
    "bg-gradient-to-r from-[#16222A] to-[#3A6073]",      // Gunmetal to Steel Blue
    "bg-gradient-to-r from-[#1F1C2C] to-[#2c3e50]",      // Dark Purple to Navy
    "bg-gradient-to-r from-[#2C3E50] to-[#3498db]",      // Midnight Blue to Royal
    "bg-gradient-to-r from-[#134E5E] to-[#2c3e50]",      // Deep Teal to Navy
    
    // Rich three-color gradients
    "bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364]",  // Deep Ocean
    "bg-gradient-to-r from-[#000046] via-[#1CB5E0] to-[#000046]",  // Midnight Ocean
    "bg-gradient-to-r from-[#3A7BD5] via-[#2c3e50] to-[#2C5364]",  // Royal Night
    "bg-gradient-to-r from-[#0B486B] via-[#3B8686] to-[#2c3e50]",  // Deep Sea
    
    // Corporate gradients
    "bg-gradient-to-r from-[#1e3c72] to-[#2a5298]",      // Corporate Blue
    "bg-gradient-to-r from-[#243B55] to-[#141E30]",      // Business Dark
    "bg-gradient-to-r from-[#004e92] to-[#000428]",      // Deep Ocean Night
    "bg-gradient-to-r from-[#0f0c29] to-[#302b63]"       // Deep Purple Night
];


    const headerColor = path === "/" 
        ? "bg-gradient-to-r from-black/80 to-black/60" 
        : headerGradients[Math.floor(Math.random() * headerGradients.length)];


    useEffect(()=>{
        if(path.includes("/api/auth") && session){
            window.location.href = "/";;
        }
    })
  return (
    <>
        <div className=    {` max-sm:hidden flex  items-center  justify-between fixed top-0 left-0 right-0 ${headerColor} h-16    `}>
            <div className=" h-full w-fit flex items-center gap-5 text-2xl text-white ">
                <Link href={"/"} className=" h-full w-16 bg-white">
                    <img src="https://compete-iare.vercel.app/images.png" 
                    alt="logo" 
                    className="object-cover h-full w-full"/>
                </Link>
                <p>Institute of Aeronautical Engineering</p>
            </div>
            <div className=" px-5">
                <ul className=" flex  items-center gap-5 text-white ">
                    <li>
                        <Link className=" hover:underline" href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/Rankings'}>Rankings</Link>
                    </li>
                    <li><SignOutButton/></li>
                </ul>
            </div>
        </div>


        <div className="hidden max-sm:block">
            <div
                className={`w-full transition-all fixed bottom-[0.75rem] z-[2000]
                left-0 right-0 top-auto flex justify-center items-center gap-6`}
            >
                <div
                className="w-[90%] shadow-2xl bg-[#000000]/80 backdrop-blur-sm
                    rounded-full h-[40px] flex items-center justify-around px-7"
                >
                <div>
                    <a href="/">
                    <HomeIcon color={path === "/" ? "white" : "grey"} scale={1} />
                    </a>
                </div>
                <div>
                    <a href="/rankings">
                    <PeopleIcon
                        color={path === "/rankings" ? "white" : "grey"}
                        scale={1}
                    />
                    </a>
                </div>
                <div>
                    <a href="/settings">
                    <SettingsIcon
                        color={path === "/settings" ? "white" : "grey"}
                        scale={1}
                    />
                    </a>
                </div>
                <div>
                    {session ? (
                    <Link href={"/user"+session.user.rollNumber}>
                        <div className=" h-5 w-5 bg-amber-400 rounded-full overflow-hidden">
                            <img 
                                src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${session.user.rollNumber}/${session.user.rollNumber}.jpg`} 
                                alt="profile"
                                className="object-cover"
                            />
                        </div>
                    </Link>
                    ) : (
                    <Link href="/api/auth">
                        <UserIcon
                        color={path === "/login" ? "white" : "grey"}
                        scale={1}
                        />
                    </Link>
                    )}
                </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default NavBar;
