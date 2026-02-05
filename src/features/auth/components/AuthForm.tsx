import { AuthInput } from "./AuthInput";
import { useAuthForm } from "../hooks/useForm";
import { motion, AnimatePresence } from "framer-motion";
import { itemVariants, scaleUp } from "../../../shared/animations/animations";
import { useTranslation } from "react-i18next";

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

    const { t } = useTranslation();

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
                {mode === 'register' && (
                    <motion.div
                        variants={itemVariants}
                        key='name-input'
                        initial='initial'
                        animate='animate'
                        exit='exit'
                    >
                        <AuthInput
                            id='name'
                            label={t('auth.fields.name')}
                            register={register('name')}
                            error={errors.name}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div variants={itemVariants}>
                <AuthInput
                    id='email'
                    label={t('auth.fields.email')}
                    type='email'
                    register={register('email', { required: 'Email required' })}
                    error={errors.email}
                />
            </motion.div>

            <motion.div variants={itemVariants}>
                <AuthInput
                    id='password'
                    label={t('auth.fields.password')}
                    type="password"
                    register={register('password', { required: 'Password required' })}
                    error={errors.password}
                />
            </motion.div>

            <motion.button
                type="submit"
                disabled={isLoading}
                className={`mt-4 py-2 px-4 rounded-lg font-medium
                        bg-zinc-900 text-white
                        hover:bg-zinc-800
                        disabled:opacity-50 disabled:cursor-not-allowed
                        dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200
                        transition-all cursor-pointer tracking-wide
                                    `}
                variants={scaleUp}
            >
                {isLoading
                    ? t('auth.loading')
                    : mode === 'login'
                        ? t('auth.login')
                        : t('auth.register')
                }
            </motion.button>
        </form>
    )
}