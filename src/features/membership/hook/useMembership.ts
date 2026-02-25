import { useMutation } from '@tanstack/react-query';
import { createMembershipSessionRequest, type CreateMembershipPayload } from '../services/membership.service';

export const useCreateMembershipSession = () =>
    useMutation({
        mutationFn: (payload: CreateMembershipPayload) => createMembershipSessionRequest(payload)
    })