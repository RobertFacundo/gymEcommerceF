import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../shared/redux/hooks";
import { AuthForm } from "../auth/components/AuthForm";
import { useState, useEffect } from "react";
import { AuthModeToggle } from "../auth/components/AuthModeToggle";

const Auth = () => {
    const [mode, setMode] = useState<'login' | 'register'>('login');

    const navigate = useNavigate();
    const { isAuthenticated } = useAppSelector(state => state.auth);

    useEffect(() => {
        if (isAuthenticated) {
            navigate('/profile', { replace: true })
        }
    }, [isAuthenticated, navigate])

    return (
        <section>
            <h1>{mode === 'login' ?'Login':'Register'}</h1>
            <AuthForm mode={mode} />
            <AuthModeToggle
                mode={mode}
                onToggle={() =>
                    setMode(prev => prev === 'login' ? 'register' : 'login')
                }
            />
        </section>
    )
};

export default Auth;