'use client'

import { getAll } from "@/services/wishes.service"
import { useEffect, useState } from "react"
import { WishesType } from "../module/wishes.interface"
import { Check, Plus, Trash2, X, Link as IconLink } from "lucide-react"
import Link from "next/link"
import { useModal } from "rdy-comp"
import { WishesModal } from "./wishes-modal"
import { WishesCreateUi } from "./wishes-create"
import { useDelete } from "../hooks/useDelete"
import { AnimatePresence, motion } from "framer-motion"

interface Props {
    className?: string
}

export const WishesUi: React.FC<Props> = () => {
    const [data, setData] = useState<WishesType[]>([]);
    const [isRemove, setIsRemove] = useState<string | null>();
    const { openModal } = useModal();
    const { handleClick } = useDelete();

    const fetchData = async () => {
        const wishes = await getAll();
        setData(wishes);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleDelete = async (id: string) => {
        setIsRemove(id)
        setTimeout(async () => {
            try {
                await handleClick(id);
                await fetchData();
            } catch (error) {

            }
        }, 600)
    };

    const handleWishCreated = () => {
        fetchData();
    };

    return (
        <div className="">
            <ul className="grid grid-cols-3 gap-3">
                <li
                    className="group border border-dashed rounded-xl border-zinc-600 flex items-center justify-center hover:border-zinc-400 transition-all duration-300 bg-zinc-800"
                    onClick={() => openModal('create')}
                >
                    <div className="border border-dashed rounded-full p-4 border-zinc-600 text-zinc-600 group-hover:border-zinc-400 group-hover:text-zinc-400 group-hover:scale-[1.10] transition-all duration-300">
                        <Plus />
                    </div>
                </li>
                {data?.map((item, index) => (
                    <AnimatePresence key={index}>
                        <motion.li
                            className="group bg-zinc-800 rounded-xl hover:bg-zinc-700 transition-colors duration-300 flex overflow-hidden"
                            initial={{
                                opacity: 0
                            }}
                            animate={{
                                opacity: isRemove === String(item.id) ? 0 : 1
                            }}

                            transition={{
                                duration: 3,
                                type: "spring"
                            }}
                        >
                            <div
                                className="p-3 w-full"
                                onClick={() => openModal(String(item.id))}
                            >
                                <h3 className="text-2xl">{item.title}</h3>
                                <p className="text-md mb-3">{item.description}</p>
                                <div className="flex justify-start items-center gap-2">
                                    <div className="px-4 py-1 bg-gray-700 rounded-xl text-gray-10">
                                        {item.priority}
                                    </div>
                                    <div className={`flex items-center justify-center p-1 w-fit rounded-full ${item.isCompleted ? 'bg-green-500' : 'bg-red-500'}`}>
                                        {item.isCompleted ? <Check size={18} /> : <X size={18} />}
                                    </div>
                                </div>
                            </div>
                            <div className="w-0 h-full group-hover:w-[50px] grid items-center justify-center grid-cols-1 transition-all duration-300 bg-zinc-800">
                                <Link href={item.link} className="flex justify-center border-b-[0.5px] h-full items-center hover:bg-zinc-500 transition-colors duration-300">
                                    <IconLink size={20} />
                                </Link>
                                <button
                                    className="flex justify-center border-t-[0.5px] h-full items-center hover:bg-zinc-500 transition-colors duration-300"
                                    onClick={() => handleDelete(String(item.id))}
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        </motion.li>
                    </AnimatePresence>
                ))}
            </ul>
            <WishesModal data={data} onWishUpdated={handleWishCreated} />
            <WishesCreateUi onWishCreated={handleWishCreated} />
        </div>
    )
}