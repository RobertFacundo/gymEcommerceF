import { useSearchParams } from 'react-router-dom';
import { useCheckoutSession } from '../hooks/useCheckoutSession';
import { useAppDispatch } from '../../../shared/redux/hooks';
import { useMeQuery } from '../../auth/hooks/auth.queries';
import { useEffect } from 'react';
import { setAuth } from '../../auth/redux/auth.slice';
import { useTranslation } from 'react-i18next';

const CheckoutSuccess = () => {
    const { t } = useTranslation();
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

    if (sessionLoading) {
        return (
            <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-3 min-h-110">
                <h1 className="text-center mt-10 tracking-widest text-4xl">{t('checkoutSuccess.verifyingPayment')}</h1>
            </div>
        );
    }

    if (sessionError) {
        return (
            <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-3 min-h-110">
                <h1 className="text-center mt-10 tracking-widest text-4xl">{t('checkoutSuccess.errorLoading')}</h1>
            </div>
        );
    }

    if (!sessionData) return null;

    if (sessionData.payment_status !== 'paid') {
        return (
            <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-3 min-h-110">
                <h1 className="text-center mt-10 tracking-widest text-4xl">{t('checkoutSuccess.processingPayment')}</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center m-3 dark:bg-zinc-900/70 bg-white/70 p-6 min-h-110">
            <h1 className="text-center mt-10 tracking-widest text-4xl text-green-500">{t('checkoutSuccess.paymentConfirmed')}</h1>
            <p className="text-center font-sans tracking-wide font-semibold p-2">{t('checkoutSuccess.thankYou')}</p>
            <p className="text-center font-sans tracking-wide font-semibold p-2">
                {t('checkoutSuccess.total')}: ${sessionData.amount_total / 100}
            </p>
        </div>
    );
};

export default CheckoutSuccess;