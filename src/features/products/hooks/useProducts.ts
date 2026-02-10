import { useQuery } from '@tanstack/react-query';
import { getProducts, getProductsByCategory } from '../services/products.service';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
    })
};

export const useProductsByCategory = (categorySlug: string) => {
    return useQuery({
        queryKey: ['products', categorySlug],
        queryFn: () => getProductsByCategory(categorySlug),
        enabled: !!categorySlug
    })
};

