import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../shared/redux/hooks";
import { AuthForm } from "../auth/components/AuthForm";
import { useState, useEffect } from "react";
import { AuthModeToggle } from "../auth/components/AuthModeToggle";
import { motion } from 'framer-motion';
import { containerVariants } from "../../shared/animations/animations";
import { useTranslation } from "react-i18next";

const Auth = () => {
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector(state => state.auth);

    const {t} = useTranslation();

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile', { replace: true })
        }
    }, [isAuthenticated, navigate])

    return (
        <section className="flex flex-col items-center justify-center min-h-screen px-4 ">
            <motion.div
                className="w-full max-w-md p-8 rounded-xl shadow-lg bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md border border-zinc-200/50 dark:border-zinc-800
                    shadow-xl shadow-black/5 dark:shadow-black/40 transition-colors duration-800"
                variants={containerVariants}
                initial='initial'
                animate='animate'
                exit='exit'
            >
                <h1 className="text-5xl tracking-wider text-center mb-3"
                >
                    {t('auth.welcome')}
                </h1>
                <AuthForm mode={mode} />
                <AuthModeToggle
                    mode={mode}
                    onToggle={() =>
                        setMode(prev => prev === 'login' ? 'register' : 'login')
                    }
                />
            </motion.div>
        </section>
    )
};

export default Auth;