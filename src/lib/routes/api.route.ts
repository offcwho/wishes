import { BACKEND_URL } from "@/lib/constants";

export const API_ROUTE = {
    root: (url: string | "") => BACKEND_URL + url,

    auth: {
        register: () => API_ROUTE.root('/auth/register'),
        login: () => API_ROUTE.root('/auth/login'),
        user: () => API_ROUTE.root('/auth/user'),
        logout: () => API_ROUTE.root('/auth/logout'),
    },

    wishes: {
        index: () => API_ROUTE.root('/wishes'),
        create: () => API_ROUTE.root('/wishes'),
        show: (id: string) => API_ROUTE.root('/wishes/' + id),
        update: (id: string) => API_ROUTE.root('/wishes/' + id),
        remove: (id: string) => API_ROUTE.root('/wishes/' + id),
    }
};