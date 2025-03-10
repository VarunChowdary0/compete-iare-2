"use client"

import { SessionProvider as SProvider } from "next-auth/react"
import NavBar from "./NavBar";

export const SessionProvider = ({children }: {children: React.ReactNode}) => {
    return (
        <SProvider>
            <NavBar/>
            {children}
        </SProvider>
    );
}