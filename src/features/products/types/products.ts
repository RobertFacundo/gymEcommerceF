import type { TranslatedText } from "./category";

export interface Product {
    _id: string;
    category: string;
    name: TranslatedText;
    description: TranslatedText;
    price: number;
    image: string;
    stock: number;
    brand?: string;
    featured?: boolean;
}