import { useMutation } from '@tanstack/react-query';
import {
    createCheckoutSession,
    type CreateCheckoutSessionPayload
} from '../services/payment.service';

export const useCreateCheckoutSession = () => {
    return useMutation({
        mutationFn: (payload: CreateCheckoutSessionPayload) =>
            createCheckoutSession(payload),
    });
};