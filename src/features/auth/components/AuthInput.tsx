import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
    label: string;
    type?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

export const AuthInput = ({
    label,
    type = 'text',
    register,
    error,
}: AuthInputProps) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} {...register} />

            {error && <p>{error.message}</p>}
        </div>
    )
}