import api from "../../../shared/config/axiosConfig";

export interface CreateCheckoutSessionResponse {
    url: string;
}

export interface CreateCheckoutSessionPayload {
    successUrl: string;
    cancelUrl: string;
}

export const createCheckoutSession = async (
    payload: CreateCheckoutSessionPayload
): Promise<CreateCheckoutSessionResponse> => {
    const { data } = await api.post<CreateCheckoutSessionResponse>(
        '/api/checkout/create-session',
        payload
    );

    console.log(data,'log del createSession service')

    return data;
}