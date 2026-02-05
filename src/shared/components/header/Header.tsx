import { Link } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { toggleTheme } from "../../redux/slice/theme.slice";
import i18n from "i18next";

const Header = () => {
    const dispatch = useAppDispatch();

    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/auth'>Auth</Link>
            </nav>
            <button onClick={() => dispatch(toggleTheme())}
                className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded"
            >
                toggle theme
            </button>
            <button onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')}>
                🌍
            </button>
        </header>
    );
};

export default Header;