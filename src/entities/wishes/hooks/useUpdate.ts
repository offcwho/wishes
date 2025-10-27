import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { wishesSchema } from "../schemas/wishes.schema"
import z from "zod";
import { update } from "@/services/wishes.service";
import { useModal, useToast } from "rdy-comp";
import { useState } from "react";

export const useUpdate = (id: string, onSuccess?: () => void) => {
    const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(wishesSchema),
    });
    const { closeModal } = useModal();
    const { showToast } = useToast();

    const onSubmit = async (data: z.infer<typeof wishesSchema>) => {
        console.log('is submited')
        console.log(data)
        try {
            await update(id, data);
            showToast({
                title: "Желание успешно обновленно",
                type: 'success'
            });
            closeModal(id)
            onSuccess?.()
        } catch (err: any) {
            if (err) {
                showToast({
                    title: "Ой, ошибка",
                    message: err.message,
                    type: 'error'
                })
            } else {
                showToast({
                    title: "Ой, ошибка",
                    message: "Ошибка сети или сервер недоступен",
                    type: 'error'
                })
            }
        }
    };

    return { register, handleSubmit, onSubmit, errors, isSubmitting, control };
}