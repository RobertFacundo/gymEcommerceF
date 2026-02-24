import { useEffect } from "react";
import { useAppDispatch } from "../../../shared/redux/hooks";
import { setCartCount } from "../redux/cart.slice";
import { useCartMutations } from "./useCartMutations";
import { useCartQuery } from "./useCartQuery";

export const useCart = () => {
    const dispatch = useAppDispatch();
    const cartQuery = useCartQuery();
    const mutations = useCartMutations();

    useEffect(() => {
        if (!cartQuery.data) return;

        const count = cartQuery.data.items.reduce(
            (acc, item) => acc + item.quantity,
            0
        );

        dispatch(setCartCount(count));
    }, [cartQuery.data, dispatch]);

    return {
        cartQuery,
        ...mutations,
    };
};