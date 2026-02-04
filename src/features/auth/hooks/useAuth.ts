import { useEffect } from "react";
import { useLoginMutation, useRegisterMutation, useMeQuery } from "./auth.queries";
import { useAppDispatch} from "../../../shared/redux/hooks";
import { setAuth, logout } from "../redux/auth.slice";

export const useAuth = () => {
    const dispatch = useAppDispatch();

    const loginMutation = useLoginMutation();
    const registerMutation = useRegisterMutation();

    const token = localStorage.getItem('token');
    const meQuery = useMeQuery(!!token);

    const login = async (data: { email: string, password: string }) => {
        const response = await loginMutation.mutateAsync(data);

        console.log(response, 'log del useauth login')
        localStorage.setItem('token', response.token);
        dispatch(setAuth(response.user))
    };

    const register = async (data: { name: string, email: string, password: string }) => {
        const response = await registerMutation.mutateAsync(data);

        console.log(response, 'log del useauth register');
        localStorage.setItem('token', response.token);
        dispatch(setAuth(response.user));
    };

    useEffect(() => {
        if (meQuery.data) {
            dispatch(setAuth(meQuery.data));
        }

        if (meQuery.isError) {
            dispatch(logout());
        }
    }, [meQuery.data, meQuery.isError, dispatch]);

    return {
        login,
        register,

        isLoading:
            loginMutation.isPending ||
            registerMutation.isPending,

        error:
            loginMutation.error ||
            registerMutation.error,

        user: meQuery.data,
    }
}