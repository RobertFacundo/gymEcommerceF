import { useSearchParams } from 'react-router-dom';
import { useCheckoutSession } from '../hooks/useCheckoutSession';

const CheckoutSuccess = () => {
    const [params] = useSearchParams();
    const sessionId = params.get('session_id');

    const { data, isLoading, isError } = useCheckoutSession(sessionId);

    if (isLoading) return <p>Verificando pago...</p>;

    if (data.payment_status !== 'paid') {
        return <p>Procesando tu pago...</p>;
    }
    if (isError) return <p>Error al cargar el pago</p>;
    if (!data) return null;

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Pago confirmado 🎉</h1>
            <p>Gracias por tu compra</p>
            <p>Total: ${data.amount_total / 100}</p>
        </div>
    );
};

export default CheckoutSuccess;