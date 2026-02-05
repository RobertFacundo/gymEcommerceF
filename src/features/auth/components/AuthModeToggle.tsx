import { useTranslation } from "react-i18next";

interface AuthModeToggleProps {
    mode: 'login' | 'register';
    onToggle: () => void;
}

export const AuthModeToggle = ({ mode, onToggle }: AuthModeToggleProps) => {
    const { t } = useTranslation();

    return (
        <p className="mt-4 text-center text-zinc-500 dark:text-zinc-400">
            {mode === 'login'
                ? t('auth.toggle.noAccount')
                : t('auth.toggle.haveAccount')}{' '}
            <button
                type="button"
                onClick={onToggle}
                className="font-medium
                       text-zinc-900 dark:text-zinc-100
                       hover:underline underline-offset-4
                       transition cursor-pointer tracking-wide"
            >
                {mode === 'login' ? t('auth.toggle.register') : t('auth.toggle.login')}
            </button>
        </p>
    );
};