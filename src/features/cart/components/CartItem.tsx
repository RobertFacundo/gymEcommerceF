import type { FC } from "react";
import { useCart } from "../hooks/useCart";
import { useTranslation } from "react-i18next";
import { TrashIcon } from "lucide-react";

interface CartItemProps {
  productId: string;
  name: { en: string; es: string }; 
  image: string;
  price: number;
  quantity: number;
}

const CartItem: FC<CartItemProps> = ({ productId, name,image, price, quantity }) => {
  const { removeProduct } = useCart();
  const { i18n } = useTranslation();

  const handleRemove = () => {
    removeProduct.mutate(productId);
  };

  return (
    <div className="flex justify-between items-center p-4 rounded-xl bg-white/60 dark:bg-black/60">
      <div className="flex items-center gap-4">
        <img src={image} alt={name[i18n.language as 'en'| 'es']} className="w-20 h-20 object-cover rounded-lg" />
        <div>
          <h3 className="text-lg font-semibold">{name[i18n.language as 'en'| 'es']}</h3>
          <p className="text-sm opacity-70">
            ${price.toFixed(2)} x {quantity}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <span className="font-bold">${price * quantity}</span>
        <button
          onClick={handleRemove}
          className="text-red-500/70 hover:text-red-700 transition cursor-pointer"
        >
          <TrashIcon size={22}/>
        </button>
      </div>
    </div>
  );
};

export default CartItem;