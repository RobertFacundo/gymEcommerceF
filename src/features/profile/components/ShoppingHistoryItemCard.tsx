import { useTranslation } from "react-i18next";
import type { ShoppingHistoryItem } from "../../../shared/types/user";

interface Props {
  order: ShoppingHistoryItem;
}

const ShoppingHistoryItemCard = ({ order }: Props) => {
  const { i18n } = useTranslation();
  const lang: 'en' | 'es' = i18n.language === 'es' ? 'es' : 'en';

  return (
    <div className="rounded-xl border p-4 bg-white/20 dark:bg-zinc-900/20">
      <div className="flex justify-between text-sm mb-2">
        <span>Order #{order.orderId}</span>
        <span>
          {new Date(order.purchasedAt).toLocaleDateString()}
        </span>
      </div>

      <ul className="text-sm space-y-1">
        {order.items.map((item, i) => (
          <li key={i} className="flex justify-between">
            <span>
              {item.name[lang]} x{item.quantity}
            </span>
            <span>
              ${item.price * item.quantity}
            </span>
          </li>
        ))}
      </ul>

      <div className="text-right font-semibold mt-2">
        Total: ${order.total}
      </div>
    </div>
  );
};

export default ShoppingHistoryItemCard