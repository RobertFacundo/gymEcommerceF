import { AuthInput } from "./AuthInput";
import { useAuthForm } from "../hooks/useForm";

interface AuthFormProps {
    mode: 'login' | 'register';
}

export const AuthForm = ({ mode }: AuthFormProps) => {
    const {
        register,
        handleSubmit,
        errors,
        isLoading,
    } = useAuthForm(mode);

    return (
        <form onSubmit={handleSubmit}>
            {mode === 'register' && (
                <AuthInput
                    label="name"
                    register={register('name')}
                    error={errors.name}
                />
            )}

            <AuthInput
                label="Email"
                type='Email'
                register={register('email', { required: 'Email required' })}
                error={errors.email}
            />
            <AuthInput
                label="Password"
                type="password"
                register={register('password', { required: 'Password required' })}
                error={errors.password}
            />

            <button type="submit" disabled={isLoading}>
                {isLoading
                    ? 'Loading...'
                    : mode === 'login'
                        ? 'Login'
                        : 'Register'
                }
            </button>
        </form>
    )
}