import type { FC } from "react";
import CartItem from "./CartItem";
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from "../../../shared/animations/animations";

interface CartListProps {
  items: Array<{
    productId: string;
    name: { en: string; es: string };
    image: string;
    price: number;
    quantity: number;
  }>;
}

const CartList: FC<CartListProps> = ({ items }) => {
  return (
    <motion.div
      className="flex flex-col gap-1"
      variants={containerVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {items.map(item => (
        <motion.div
          key={item.productId}
          variants={itemVariants}
        >
          <CartItem
            key={item.productId}
            productId={item.productId}
            name={item.name}
            image={item.image}
            price={item.price}
            quantity={item.quantity}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default CartList;