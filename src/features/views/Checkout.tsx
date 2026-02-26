import { useCreateCheckoutSession } from "../checkout/hooks/useCreateCheckoutSession";
import { useCart } from "../cart/hooks/useCart";
import { useTranslation } from "react-i18next";

const Checkout = () => {
    const { cartQuery } = useCart();
    const { mutate, isPending } = useCreateCheckoutSession();
    const { t } = useTranslation();

    if (cartQuery.isLoading) {
        return <h1>...</h1>;
    }

    const total = cartQuery.data?.items.reduce(
        (acc: number, item: any) => acc + item.price * item.quantity,
        0
    ) ?? 0;

    const handlePay = () => {
        mutate(
            {
                successUrl: `${window.location.origin}/checkout/success`,
                cancelUrl: `${window.location.origin}/checkout/cancel`,
            },
            {
                onSuccess: ({ url }) => {
                    window.location.href = url;
                },
            }
        );
    };

    return (
        <div className="space-y-6">
            <h1 className="text-2xl tracking-wide">{t('checkout.title')}</h1>

            {/* Acá luego pondremos el resumen del carrito */}
            <p className="text-lg">{t('checkout.total')}<strong>{total}</strong></p>

            <div className="bg-yellow-100 p-4 rounded">
                <p className="text-sm dark:text-black">
                    {t('checkout.testModeWarning', { cardNumber: '4242 4242 4242 4242' })}
                </p>
            </div>

            <button
                onClick={handlePay}
                disabled={isPending}
                className="bg-black text-white px-6 py-3 rounded disabled:opacity-50 cursor-pointer"
            >
                {isPending ? t('checkout.redirecting') : t('checkout.payButton')}
            </button>
        </div>
    )
};

export default Checkout;