import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container } from "./container";
import { getUser, logout, UserProps } from "@/services/auth.service";
import { LogOut } from "lucide-react";
import { useToast } from "rdy-comp";
import { useUser } from "../providers/UserContext";

interface Props {
    className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
    const { user } = useUser();
    const { showToast } = useToast();

    const handleLogOut = async () => {
        const LogOut = await logout();
        if (LogOut) {
            showToast({
                title: 'Вы успешно вышли из аккаунта',
                type: 'success',
            })
            window.location.reload();
        }
    }

    return (
        <header className={`${className}font-sans mx-auto w-full py-4`}>
            <Container>
                <nav className={`grid ${user ? 'grid-cols-2' : 'grid-cols-4'} list-none items-center h-14 w-800px overflow-hidden border-2 border-gray-400 rounded-3xl`}>
                    <li className="flex w-full h-full items-center justify-center">
                        <Link
                            href="/"
                            className="text-white h-full w-full text-center font-medium cursor-pointer hover:bg-gray-400 flex items-center justify-center transition-colors duration-300"
                        >
                            Home
                        </Link>
                    </li>
                    <li className="flex w-full h-full items-center justify-center">
                        <Link
                            href="/wishes"
                            className="text-white h-full w-full text-center font-medium cursor-pointer hover:bg-gray-400 flex items-center justify-center transition-colors duration-300"
                        >
                            Wishes
                        </Link>
                    </li>
                    {!user && (
                        <>
                            <li className="flex w-full h-full items-center justify-center">
                                <Link
                                    href="/login"
                                    className="text-white h-full w-full text-center font-medium cursor-pointer hover:bg-gray-400 flex items-center justify-center transition-colors duration-300"
                                >
                                    Log in
                                </Link>
                            </li>
                            <li className="flex w-full h-full items-center justify-center">
                                <Link
                                    href="/register"
                                    className="text-white h-full w-full text-center font-medium cursor-pointer hover:bg-gray-400 flex items-center justify-center transition-colors duration-300"
                                >
                                    Register
                                </Link>
                            </li>
                        </>
                    )}
                </nav>
                <button onClick={handleLogOut}>
                    <LogOut />
                </button>
            </Container>
        </header >
    );
}