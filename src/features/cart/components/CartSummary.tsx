import type{ FC } from "react";
import { useCart } from "../hooks/useCart";

interface CartSummaryProps {
  total: number;
}

const CartSummary: FC<CartSummaryProps> = ({ total }) => {
  const { clear } = useCart();

  return (
    <div className="mt-6 p-6 rounded-xl bg-white/60 dark:bg-black/60 flex justify-between items-center">
      <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>

      <button
        onClick={() => clear.mutate()}
        className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
        Clear cart
      </button>
    </div>
  );
};

export default CartSummary;