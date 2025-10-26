import { z } from "zod";
import { PriorityEnum } from "../module/wishes.interface";

export const wishesSchema = z.object({
    title: z.string(),
    description: z.string(),
    link: z.string(),
    priority: z.enum([PriorityEnum.LOW, PriorityEnum.MEDIUM, PriorityEnum.HIGH]),
    isCompleted: z.boolean()
})