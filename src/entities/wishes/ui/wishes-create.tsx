import { RdyButton, RdyInput, RdyModal, RdyOption, RdySelect } from "rdy-comp"
import { Controller } from "react-hook-form"
import { WISHES_PRIORITY_DATA } from "../module/priority.data"
import { useCreate } from "../hooks/useCreate"

interface Props {
    onWishCreated?: () => void;
}

export const WishesCreateUi: React.FC<Props> = ({ onWishCreated }) => {

    const { handleSubmit, onSubmit, errors, control } = useCreate(onWishCreated);
    return (
        <RdyModal
            id="create"
            title="Создать пожелание"
            close
            className="bg-zinc-800! text-gray-300!"
        >
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 items-center">
                    <div className="w-full">
                        <Controller
                            name="title"
                            control={control}
                            render={({ field }) => (
                                <RdyInput
                                    {...field}
                                    id="title"
                                    label="Название"
                                    error={errors.title?.message}
                                    rounded="2xl"
                                    className="border-0! bg-zinc-600!"
                                    backgroundColor={{
                                        onBlur: '#3f3f47',
                                        onFocus: '#52525c',
                                    }}
                                    labelColor={{
                                        onBlur: '#6a7282',
                                        onFocus: '#99a1af',
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <Controller
                            name="description"
                            control={control}
                            render={({ field }) => (
                                <RdyInput
                                    {...field}
                                    id="Description"
                                    label="Описание"
                                    error={errors.description?.message}
                                    rounded="2xl"
                                    className="border-0! bg-zinc-600!"
                                    backgroundColor={{
                                        onBlur: '#3f3f47',
                                        onFocus: '#52525c',
                                    }}
                                    labelColor={{
                                        onBlur: '#6a7282',
                                        onFocus: '#99a1af',
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <Controller
                            name="link"
                            control={control}
                            render={({ field }) => (
                                <RdyInput
                                    {...field}
                                    id="link"
                                    label="Ссылка"
                                    error={errors.link?.message}
                                    rounded="2xl"
                                    className="border-0! bg-zinc-600!"
                                    backgroundColor={{
                                        onBlur: '#3f3f47',
                                        onFocus: '#52525c',
                                    }}
                                    labelColor={{
                                        onBlur: '#6a7282',
                                        onFocus: '#99a1af',
                                    }}
                                />
                            )}
                        />
                    </div>
                    <div className="w-full">
                        <Controller
                            name="priority"
                            control={control}
                            render={({ field }) => (
                                <RdySelect
                                    {...field}
                                    className="w-full"
                                    clearable
                                    placeholder="Выберите приоритет"
                                >
                                    {WISHES_PRIORITY_DATA.map((item, index) => (
                                        <RdyOption value={item.value} label={item.title} key={index}>{item.title}</RdyOption>
                                    ))}
                                </RdySelect>
                            )}
                        />
                        <p className="text-red-500">{errors.priority?.message && errors.priority?.message}</p>
                    </div>
                    <RdyButton className="w-full rounded-xl! bg-sky-600! hover:bg-sky-600/60! text-gray-100! transition-colors">Сохранить</RdyButton>
                </form>
            </div>
        </RdyModal>
    )
}