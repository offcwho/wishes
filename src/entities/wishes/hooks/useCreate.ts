import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { wishesSchema } from "../schemas/wishes.schema"
import z from "zod";
import { create } from "@/services/wishes.service";
import { useModal, useToast } from "rdy-comp";

export const useCreate = (onSuccess?: () => void) => {
    const { register, handleSubmit, control, reset, formState: { errors, isSubmitting } } = useForm({
        resolver: zodResolver(wishesSchema),
    });
    const { closeModal } = useModal();
    const { showToast } = useToast();

    const onSubmit = async (data: z.infer<typeof wishesSchema>) => {
        console.log('is submited')
        try {
            await create(data);
            closeModal('create');
            reset();
            showToast({
                title: "Желание успешно создано!",
                type: 'success'
            });
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