"use client"

import { SessionProvider } from "./SessionProvider";

export default function Provider({children }: {children: React.ReactNode}) {
    return (
        <SessionProvider>
            {children} 
        </SessionProvider>
    )

}