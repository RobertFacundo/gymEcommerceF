import api from "../../../shared/config/axiosConfig";

export const getCart = async () => {
    const res = await api.get('/api/cart/');

    return res.data;
};

export const addProductToCart = async (product: {
    productId: string;
    name: { es: string, en: string }
    image: string;
    price: number;
    quantity: number;
}) => {
    const res = await api.post('/api/cart/product', product);

    return res.data;
};

export const removeProductFromCart = async (productId: string) => {
    const res = await api.delete(`/api/cart/product/${productId}`);

    console.log(res, 'log del service remove')

    return res.data;
}

export const clearCart = async () => {
    const res = await api.delete('/api/cart');

    return res.data;
}

export const mergeCart = async () => {
    const guestId = localStorage.getItem('guestId');

    const res = await api.post('/api/cart/merge', {
        guestId,
    });

    return res.data;
}