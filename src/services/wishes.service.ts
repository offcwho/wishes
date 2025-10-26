import api from "@/api/config.api";
import { getAuthHeaders } from "@/api/headers.api";
import { WishesType } from "@/entities/wishes";
import { wishesSchema } from "@/entities/wishes/schemas/wishes.schema";
import { API_ROUTE } from "@/lib/routes/api.route";
import z from "zod";

export const getAll = async (): Promise<WishesType[]> => {
    const response = await api.get(API_ROUTE.wishes.index(), {
        headers: await getAuthHeaders(),
    });
    return response.data;
}

export const getOne = async (id: string): Promise<WishesType> => {
    const response = await api.get(API_ROUTE.wishes.show(id), {
        headers: await getAuthHeaders(),
    });
    return response.data;
}

export const create = async (data: z.infer<typeof wishesSchema>): Promise<WishesType> => {
    const response = await api.post(
        API_ROUTE.wishes.create(),
        data,
        { headers: await getAuthHeaders() },
    );
    return response.data;
}

export const update = async (id: string, data: z.infer<typeof wishesSchema>): Promise<WishesType> => {
    const response = await api.patch(
        API_ROUTE.wishes.update(id),
        data,
        { headers: await getAuthHeaders() },
    );
    return response.data;
}

export const remove = async (id: string): Promise<WishesType> => {
    const response = await api.delete(API_ROUTE.wishes.remove(id), {
        headers: await getAuthHeaders(),
    });
    return response.data;
}