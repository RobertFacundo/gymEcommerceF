import api from "../../../shared/config/axiosConfig";

export interface RegisterPayload {
    name: string;
    email: string;
    password: string;
}

export interface LoginPayload {
    email: string;
    password: string;
}

export const registerRequest = async (payload: RegisterPayload) => {
    const { data } = await api.post('/api/auth/register', payload);

    return data;
};

export const loginRequest = async (payload: LoginPayload) => {
    const { data } = await api.post('/api/auth/login', payload);

    return data;
};

export const getMeRequest = async () => {
    const { data } = await api.get('/api/auth/me');

    return data;
}