import { useCart } from "../cart/hooks/useCart";
import CartList from "../cart/components/CartList";
import CartSummary from "../cart/components/CartSummary";

const CartView = () => {
  const { cartQuery } = useCart();

  if (cartQuery.isLoading) {
    return <p className="text-center mt-10">Loading cart...</p>;
  }

  if (!cartQuery.data || cartQuery.data.items.length === 0) {
    return <p className="text-center mt-10">Your cart is empty</p>;
  }

  const total = cartQuery.data.items.reduce(
    (acc: number, item: any) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl mb-6 border-b border-black/50 dark:border-white/50">Your Cart</h1>

      <CartList items={cartQuery.data.items} />
      <CartSummary total={total} />
    </div>
  );
};

export default CartView;