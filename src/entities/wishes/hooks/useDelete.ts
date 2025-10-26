import { remove } from "@/services/wishes.service"
import { useToast } from "rdy-comp"

export const useDelete = () => {
    const { showToast } = useToast();

    const handleClick = async (id: string) => {
        try {
            await remove(id)
            showToast({
                title: "Желание успешно удалено",
                type: 'success'
            })
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
    }
    return { handleClick }
}