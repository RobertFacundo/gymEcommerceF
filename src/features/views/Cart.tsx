import { useCart } from "../cart/hooks/useCart";
import CartList from "../cart/components/CartList";
import CartSummary from "../cart/components/CartSummary";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import { fadeIn } from "../../shared/animations/animations";

const CartView = () => {
  const { cartQuery } = useCart();
  const { t } = useTranslation();

  if (cartQuery.isLoading) {
    return <p className="text-center mt-10">Loading cart...</p>;
  }

  if (!cartQuery.data || cartQuery.data.items.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-3 min-h-110">
        <h1 className="text-center mt-10 tracking-widest text-4xl">{t('cart.empty')}</h1>
        <p className="text-center font-sans tracking-wide font-semibold p-5">
          {t("cart.recomendation")}
        </p>
      </div>
    );
  }

  const total = cartQuery.data.items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <motion.div
      className="max-w-4xl mx-auto p-6"
      variants={fadeIn}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      <h1 className="text-3xl mb-6 border-b border-black/50 dark:border-white/50">{t('cart.title')}</h1>

      <CartList items={cartQuery.data.items} />
      <CartSummary total={total} />
    </motion.div>
  );
};

export default CartView;