import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import { toggleTheme } from "../../../../redux/slice/theme.slice";
import i18n from "../../../../i18n/i18n";
import IconButton from "./ThemeButton";

const HeaderSystemActions = () => {
    const dispatch = useAppDispatch();
    const mode = useAppSelector((state) => state.theme.mode)
    const isDark = mode === 'dark';

    return (
        <div className="flex items-center gap-2">
            <IconButton onClick={() => dispatch(toggleTheme())} label="Toggle theme">
                <img
                    src={isDark ? "/sol.png" : "/luna.png"}
                    className="h-8 w-8 transition-transform hover:scale-105 cursor-pointer m-2 "
                />
            </IconButton>

            <button
                onClick={() =>
                    i18n.changeLanguage(i18n.language === "en" ? "es" : "en")
                }
                className="p-2 rounded hover:bg-gray-100/60 dark:hover:bg-zinc-800/60 cursor-pointer"
            >
                <img src="/atlas.png" alt="Language" className="h-12 w-12" />
            </button>
        </div>
    );
};

export default HeaderSystemActions;