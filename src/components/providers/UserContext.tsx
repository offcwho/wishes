"use client"

import { getUser, UserProps } from "@/services/auth.service";
import { createContext, useContext, useEffect, useState } from "react";

interface UserContext {
    user: UserProps | undefined;
}

const UserContext = createContext<UserContext | undefined>(undefined)

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<UserProps>();

    useEffect(() => {
        const User = async () => {
            try {
                const response = await getUser();
                if (response) setUser(response);
            } catch (err) {
                console.log(err)
            }
        }
        User();
    }, [])

    const value: UserContext = {
        user
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (context === undefined) {
        throw new Error('useUser must be used within an AuthProvider');
    }
    return context;
}