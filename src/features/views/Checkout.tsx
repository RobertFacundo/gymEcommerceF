import { useCreateCheckoutSession } from "../checkout/hooks/useCreateCheckoutSession";

const Checkout = () => {
    const { mutate, isPending } = useCreateCheckoutSession();

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
            <h1 className="text-2xl font-bold">Checkout</h1>

            {/* Acá luego pondremos el resumen del carrito */}
            <p className="text-lg">Total a pagar: <strong>$XXX</strong></p>

            <div className="bg-yellow-100 p-4 rounded">
                <p className="text-sm">
                    ⚠️ Modo test: usá la tarjeta <strong>4242 4242 4242 4242</strong><br />
                    Fecha futura cualquiera – CVC cualquiera
                </p>
            </div>

            <button
                onClick={handlePay}
                disabled={isPending}
                className="bg-black text-white px-6 py-3 rounded disabled:opacity-50"
            >
                {isPending ? 'Redirigiendo...' : 'Pagar'}
            </button>
        </div>
    )
};

export default Checkout;