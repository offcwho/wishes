export interface WishesType {
    id: number;
    title: string;
    description: string;
    link: string;
    isCompleted: boolean;
    priority: 'LOW' | 'MEDIUM' | 'HIGH'
    user: {
        id: number;
        name: string;
        email: string;
    }
}

export const PriorityEnum = {
    LOW: "LOW",
    MEDIUM: "MEDIUM",
    HIGH: "HIGH",
} as const;