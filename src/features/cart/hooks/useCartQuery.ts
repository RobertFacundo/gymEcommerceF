import { useQuery } from "@tanstack/react-query";
import { getCart } from "../services/cart.services";
import type { Cart } from "../types/cart.types";

export const CART_QUERY_KEY = ["cart"];

export const useCartQuery = () =>
  useQuery<Cart>({
    queryKey: CART_QUERY_KEY,
    queryFn: getCart,
  });