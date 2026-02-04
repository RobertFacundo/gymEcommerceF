interface AuthModeToggleProps {
    mode: 'login' | 'register';
    onToggle: () => void;
}

export const AuthModeToggle = ({ mode, onToggle }: AuthModeToggleProps) => {
    return (
        <p>
            {mode === 'login'
                ? '¿No tenés cuenta?'
                : '¿Ya tenés cuenta?'}{' '}
            <button type="button" onClick={onToggle}>
                {mode === 'login' ? 'Registrate' : 'Login'}
            </button>
        </p>
    );
};