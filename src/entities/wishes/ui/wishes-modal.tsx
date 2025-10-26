'use client'

import { getAll } from "@/services/wishes.service";
import { RdyModal } from "rdy-comp";
import { useEffect, useState } from "react";
import { WishesType } from "../module/wishes.interface";
import { WishesUpdateForm } from "./wishes-update-form";

interface Props {
    data: WishesType[]
    onWishUpdated?: () => void;
}

export const WishesModal: React.FC<Props> = ({ data, onWishUpdated }) => {
    return (
        <>
            {data?.map((item, index) => (
                <RdyModal
                    key={index}
                    id={String(item.id)}
                    title={item.title}
                    close
                    className="bg-zinc-800! text-gray-300!"
                >
                    <WishesUpdateForm item={item} onWishUpdated={onWishUpdated}/>
                </RdyModal>
            ))}
        </>
    )
}