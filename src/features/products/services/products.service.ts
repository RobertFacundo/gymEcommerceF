import api from "../../../shared/config/axiosConfig";
import type { Product } from "../types/products";

export const getProducts = async (): Promise<Product[]> => {
    const { data } = await api.get('/api/products/');
    return data;
};

export const getProductsByCategory = async (
    categorySlug: string
): Promise<Product[]> => {
    const { data } = await api.get(`/api/products/${categorySlug}`);
    return data;
};

