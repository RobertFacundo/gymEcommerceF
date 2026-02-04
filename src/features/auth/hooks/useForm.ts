import { useForm } from 'react-hook-form';
import { useAuth } from './useAuth';

type AuthMode = 'login' | 'register';

interface AuthFormValues {
    name?: string;
    email: string;
    password: string;
}

export const useAuthForm = (mode: AuthMode) => {
    const { login, register: registerUser, isLoading } = useAuth();

    const { register, handleSubmit, formState: { errors } } = useForm<AuthFormValues>();

    const onSubmit = async (data: AuthFormValues) => {
        if (mode === 'login') {
            await login({
                email: data.email,
                password: data.password,
            });
        }

        if (mode === 'register') {
            await registerUser({
                name: data.name!,
                email: data.email,
                password: data.password,
            });
        }
    };

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isLoading,
        mode,
    };
};