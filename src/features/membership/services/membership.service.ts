import api from "../../../shared/config/axiosConfig";

export interface CreateMembershipPayload {
    userId: string;
    priceId: string;
    successUrl: string;
    cancelUrl: string;
}

export const createMembershipSessionRequest = async (payload: CreateMembershipPayload) => {
    const { data } = await api.post('/api/membership/create', payload);
    return data;
}