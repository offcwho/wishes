"use client"

import { z } from "zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/entities/auth/schemas/auth.schema";
import { login as loginService } from "@/services/auth.service";
import { APP_ROUTE } from "@/lib/routes/app.route";
import { useState } from "react";

export const useLogin = () => {
    const router = useRouter();
    const [error, setError] = useState<{ status?: number; message?: string } | null>(null);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = async (data: z.infer<typeof loginSchema>) => {
        try {
            await loginService(data);
            router.push(APP_ROUTE.home());
        } catch (err: any) {
            console.error(err);

            if (err) {
                setError({
                    status: err.status,
                    message: err.message,
                });
            } else {
                setError({ message: "Ошибка сети или сервер недоступен" });
            }
        }
    };

    return { register, handleSubmit, onSubmit, errors, isSubmitting, error };
}