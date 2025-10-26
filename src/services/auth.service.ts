import { z } from 'zod';
import api from '@/api/config.api';
import { loginSchema, registerSchema } from "@/entities/auth/schemas/auth.schema";
import { API_ROUTE } from "@/lib/routes/api.route";

export const login = async (data: z.infer<typeof loginSchema>) => {
    return api.post(API_ROUTE.auth.login(), data)
}

export const register = async (data: z.infer<typeof registerSchema>) => {
    return api.post(API_ROUTE.auth.register(), data);
}