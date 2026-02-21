export interface ShoppingItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

export interface ShoppingHistoryItem {
    orderId: string;
    items: ShoppingItem[];
    total: number;
    purchasedAt: string;
}

export interface User {
    name: string;
    email: string;
    isMember: boolean;
    shoppingHistory: ShoppingHistoryItem[];
    createdAt: string;
}