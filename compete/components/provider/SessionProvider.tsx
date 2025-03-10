"use client"

import { SessionProvider as SProvider } from "next-auth/react"
import NavBar from "./NavBar";

export const SessionProvider = ({children }: {children: React.ReactNode}) => {
    return (
        <SProvider>
            <NavBar/>
            <div className=" mt-16 max-sm:mt-0"></div>
            {children}
        </SProvider>
    );
}