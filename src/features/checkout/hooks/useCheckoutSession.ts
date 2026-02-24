import { useQuery } from "@tanstack/react-query";
import { getCheckoutSession } from "../services/checkout.service";

export const useCheckoutSession = (sessionId?: string | null) => {
    return useQuery({
        queryKey: ['checkout-session', sessionId],
        queryFn: () => getCheckoutSession(sessionId!),
        enabled: !!sessionId,

        refetchInterval: (query) => {
            const status = query.state.data?.payment_status;
            return status !== 'paid' ? 2000 : false;
        },

        // evita refetch innecesario
        refetchOnWindowFocus: false,
        retry: 3,
    })
}