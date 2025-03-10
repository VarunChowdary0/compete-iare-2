import HomeIcon from "@/icons/HomeIcon";
import PeopleIcon from "@/icons/PeopleIcon";
import SettingsIcon from "@/icons/SettingsIcon";
import UserIcon from "@/icons/UserIcon";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import SignOutButton from "../SignOutButtion";

const NavBar: React.FC = () => {
  const path = usePathname();
  const { data: session } = useSession();

  return (
    <>
        <div className=" flex  items-center justify-end px-5 fixed top-0 left-0 right-0 bg-amber-700 h-16">
            <SignOutButton/>
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
                    <Link href={"/"}>

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
