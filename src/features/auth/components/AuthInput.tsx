import type { FieldError, UseFormRegisterReturn } from "react-hook-form";

interface AuthInputProps {
    id: string;
    label: string;
    type?: string;
    register: UseFormRegisterReturn;
    error?: FieldError;
}

export const AuthInput = ({
    id,
    label,
    type = 'text',
    register,
    error,
}: AuthInputProps) => {
    return (
        <div className="flex flex-col">
            <label className="mb-1 font-medium text-gray-700 dark:text-gray-200 ml-2" htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                {...register}
                className={` border border-zinc-300 dark:border-zinc-700
                            bg-white/80 dark:bg-zinc-800/80
                            rounded-lg px-3 py-2
                            text-zinc-900 dark:text-zinc-100
                            placeholder:text-zinc-400
                            focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600
                            transition
                `}
            />

            {error && <p>{error.message}</p>}
        </div>
    )
}