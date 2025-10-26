import { z } from "zod";
import { PriorityEnum } from "../module/wishes.interface";

export const wishesSchema = z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    priority: z.enum([PriorityEnum.LOW, PriorityEnum.MEDIUM, PriorityEnum.HIGH]),
    isCompleted: z.boolean()
})

export const wishesCreateSchema = z.object({
    title: z.string().min(1, "Название обязательно"),
    description: z.string().optional(),
    link: z.string().url("Неверный формат ссылки").optional().or(z.literal("")),
    priority: z.enum([PriorityEnum.LOW, PriorityEnum.MEDIUM, PriorityEnum.HIGH]),
})