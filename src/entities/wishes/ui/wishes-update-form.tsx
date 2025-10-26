import { Controller } from "react-hook-form";
import { RdyInput, RdySelect, RdyOption, RdyButton, RdyToggle } from "rdy-comp";
import { useUpdate } from "../hooks/useUpdate";
import { WISHES_PRIORITY_DATA } from "../module/priority.data";
import { PriorityEnum, WishesType } from "../module/wishes.interface";

interface Props {
    onWishUpdated?: () => void;
    item: WishesType;
}

export const WishesUpdateForm: React.FC<Props> = ({ item, onWishUpdated }) => {
    const { register, handleSubmit, onSubmit, errors, control } = useUpdate(String(item.id), onWishUpdated);

    return (
        <div className="">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 items-center">
                <div className="w-full">
                    <Controller
                        name="title"
                        control={control}
                        defaultValue={item.title}
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
                        defaultValue={item.title}
                        render={({ field }) => (
                            <RdyInput
                                {...field}
                                id="description"
                                label="Описание"
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
                        name="link"
                        control={control}
                        defaultValue={item.link}
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
                    <div className="mt-4 flex gap-2 items-center text-gray-300">
                        <RdyToggle
                            {...register('isCompleted')}
                            background={{
                                enabled: "green",
                                disabled: ''
                            }}
                            className="bg-zinc-700!"
                        />
                        <span>Статус пожелания</span>
                    </div>
                    <p className="text-red-500">{errors.priority?.message && errors.priority?.message}</p>
                </div>
                <button type="submit" className="w-full bg-white">asdasd</button>
            </form>
        </div>
    )
}