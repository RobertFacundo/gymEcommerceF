import { useSearchParams } from 'react-router-dom';
import { useCheckoutSession } from '../hooks/useCheckoutSession';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { useMeQuery } from '../../auth/hooks/auth.queries';
import { useEffect } from 'react';
import { setAuth } from '../../auth/redux/auth.slice';

const CheckoutSuccess = () => {
    const [params] = useSearchParams();
    const sessionId = params.get('session_id');
    const dispatch = useAppDispatch();

    const { data: sessionData, isLoading: sessionLoading, isError: sessionError } = useCheckoutSession(sessionId);

    const meQuery = useMeQuery(!!sessionData)

    useEffect(() => {
        if (meQuery.data) {
            dispatch(setAuth(meQuery.data));
        }
    }, [meQuery.data, dispatch])

    if (sessionLoading) return <p>Verificando pago...</p>;
    if (sessionError) return <p>Error al cargar el pago</p>;
    if (!sessionData) return null;

    if (sessionData.payment_status !== 'paid') {
        return <p>Procesando tu pago...</p>;
    }

    return (
        <div className="space-y-4">
            <h1 className="text-2xl font-bold">Pago confirmado 🎉</h1>
            <p>Gracias por tu compra</p>
            <p>Total: ${sessionData.amount_total / 100}</p>
        </div>
    );
};

export default CheckoutSuccess;