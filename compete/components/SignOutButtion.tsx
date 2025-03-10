"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { TimerIcon } from "lucide-react";
import { useEffect, useState } from "react";

export default function SignOutButton() {
  const session = useSession();
  const router = useRouter();
  console.log(session.data?.expires , Date.now() );

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
    <div
      onClick={() => signOut()}
      className="inline-flex items-center px-2 gap-2 py-1 border border-transparent 
      text-sm  rounded-md text-black font-thin
      focus:outline-none focus:ring-2 focus:ring-offset-2 bg-white "
    >
    <TimerIcon size={20} />
    {exp}
    </div>
  );
}
