import { useMutation, useQuery } from '@tanstack/react-query';
import { loginRequest, registerRequest, getMeRequest, type LoginPayload, type RegisterPayload } from '../services/auth.services';

export const useRegisterMutation = () =>
    useMutation({
        mutationFn: (payload: RegisterPayload) => registerRequest(payload),
    });

export const useLoginMutation = () =>
    useMutation({
        mutationFn: (payload: LoginPayload) => loginRequest(payload),
    });

export const useMeQuery = (enabled = true) =>
    useQuery({
        queryKey: ['me'],
        queryFn: getMeRequest,
        enabled,
        retry: false
    }); 