'use client'

import { ModalProvider, ToastProvider } from "rdy-comp";
import { UserProvider } from "./providers/UserContext";

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <UserProvider>
            <ToastProvider>
                <ModalProvider>
                    {children}
                </ModalProvider>
            </ToastProvider>
        </UserProvider >
    )
}