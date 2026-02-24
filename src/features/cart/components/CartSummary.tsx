import type { FC } from "react";
import { useCart } from "../hooks/useCart";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion'

interface CartSummaryProps {
  total: number;
}

const CartSummary: FC<CartSummaryProps> = ({ total }) => {
  const { clear } = useCart();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCheckout = () => {
    navigate('/checkout')
  }

  return (
    <div className="mt-6 p-6 rounded-xl bg-white/60 dark:bg-black/60 flex justify-between items-center">
      <span className="text-xl font-bold">Total: ${total.toFixed(2)}</span>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCheckout}
        className="flex items-center px-3 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition gap-1 cursor-pointer tracking-widest"
      >
        <AiOutlineShoppingCart />
        {t("cart.checkout")}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => clear.mutate()}
        className="px-4 py-2 rounded-lg bg-red-500/70 text-white hover:bg-red-600 transition cursor-pointer tracking-tight"
      >
        {t("cart.clear")}
      </motion.button>
    </div>
  );
};

export default CartSummary;