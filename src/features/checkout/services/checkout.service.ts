import api from "../../../shared/config/axiosConfig";

export const getCheckoutSession = async (sessionId: string) => {
    const { data } = await api.get(`/api/checkout/session/${sessionId}`);
    return data;
}