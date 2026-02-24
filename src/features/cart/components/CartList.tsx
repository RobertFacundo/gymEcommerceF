import type { FC } from "react";
import CartItem from "./CartItem";

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
  console.log(items, 'log del cartlist, items ')
  return (
    <div className="flex flex-col gap-1">
      {items.map(item => (
        <CartItem
          key={item.productId}
          productId={item.productId}
          name={item.name}
          image={item.image}
          price={item.price}
          quantity={item.quantity}
        />
      ))}
    </div>
  );
};

export default CartList;