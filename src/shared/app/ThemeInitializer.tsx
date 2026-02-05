import { useEffect, useState } from "react";
import { useAppSelector } from "../redux/hooks";

export const ThemeInitializer = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const theme = useAppSelector((state) => state.theme.mode);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const root = document.documentElement;

        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }

        setMounted(true);
    }, [theme]);

    if (!mounted) return null;

    return <>{children}</>
}