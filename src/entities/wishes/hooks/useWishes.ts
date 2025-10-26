import { useEffect, useState } from "react";
import { WishesType } from "../module/wishes.interface";
import { getAll } from "@/services/wishes.service";

export const useWishes = () => {
    const [data, setData] = useState<WishesType[]>();

    const [res, setRes] = useState('');

    useEffect(() => {
        const Response = async () => {
            const wishes = await getAll();
            setData(wishes);
        }
        Response()
    }, [res]);

    return { data, setData, setRes, res }
}