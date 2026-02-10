import api from "../../../shared/config/axiosConfig";
import type { Category } from "../types/category";

export const getCategories = async (): Promise<Category[]> => {
    const { data } = await api.get('/api/products/categories');
    return data;
};
