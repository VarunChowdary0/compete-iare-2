"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { LogOutIcon, TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function SignOutButton() {
  const session = useSession();
  const router = useRouter();
  console.log(session);

  const [exp,setExp] = useState<string>("");

  useEffect(()=>{
    const expireTime = session.data?.expires;
    if (expireTime) {
      const currentTime = new Date().getTime();
      const expirationTime = new Date(expireTime).getTime();

      if (currentTime > expirationTime) {
      } else {
        const timeDiff = expirationTime - currentTime;
        const minutes = Math.floor(timeDiff / (60 * 1000));
        const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
        setExp(`${minutes}m ${seconds}s`);
      }
    }
    },[session])
    
  if(session.status === 'loading'){
    return <p>Loading...</p>
  }
  if (session.status !== "authenticated") {
    return (
      <div
        onClick={() => router.push("/api/auth")}
        className="text-black font-semibold flex hover:cursor-pointer w-fit
                hover:bg-[#2a2929] hover:text-white hover:ring-4
                hover:ring-[#6571e0] transition-all duration-300  max-sm:text-xs max-sm:py-3 max-sm:p-0 max-sm:ml-2
              px-3 py-1 bg-white rounded-md mr-3 max-sm:mr-2 "
      >
        Sign In
      </div>
    )
  }

  return (
    <div className=" group w-fit">
        <Link href={"/user/"+session.data.user.rollNumber}>
        <div className="h-10 w-10 bg-amber-400 rounded-full overflow-hidden">
            <img 
                src={`https://iare-data.s3.ap-south-1.amazonaws.com/uploads/STUDENTS/${session.data.user.rollNumber}/${session.data.user.rollNumber}.jpg`} 
                alt="profile"
                width={40}
                height={40}
                className="object-cover"
            />
        </div>
      </Link>
      <div onClick={()=> signOut()} className=" hover:cursor-pointer select-none active:scale-75 scale-0 transition-all shadow-lg group-hover:scale-100 absolute gap-2 text-white items-center justify-center
       rounded-b-lg rounded-l-lg flex text-sm top-14 right-10 px-3 py-1 bg-red-500">
        Sign Out
        <LogOutIcon  width={12}/>
      </div>
    </div>
  );
}
