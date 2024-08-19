"use client"

import { SessionProvider, SessionProviderProps } from 'next-auth/react'

export const AuthProvider = ({ children }) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}
