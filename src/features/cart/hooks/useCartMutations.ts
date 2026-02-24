import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addProductToCart,
  removeProductFromCart,
  clearCart,
  mergeCart,
} from "../services/cart.services";
import { CART_QUERY_KEY } from "./useCartQuery";
import { toast } from 'react-hot-toast';

export const useCartMutations = () => {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({ queryKey: CART_QUERY_KEY });

  return {
    addProduct: useMutation({
      mutationFn: addProductToCart,
      onSuccess: (data) => {
        console.log("✅ Product added to cart:", data);
        toast.success("Product added to cart!");
        invalidate();
      },
      onError: (error) => {
        console.error("❌ Error adding product:", error);
      },
    }),
    removeProduct: useMutation({
      mutationFn: removeProductFromCart,
      onSuccess: (data) => {
        console.log("✅ Product removed from cart:", data);
        invalidate();
      },
      onError: (error) => {
        console.error("❌ Error deleting product:", error);
      },
    }),
    clear: useMutation({
      mutationFn: clearCart,
      onSuccess: invalidate,
    }),
    merge: useMutation({
      mutationFn: mergeCart,
      onSuccess: invalidate,
    }),
  };
};