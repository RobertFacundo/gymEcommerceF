import { Link } from "react-router-dom";
import CategoriesDropdown from "./CategoriesDropdown";

const SubHeader = () => {

    return (
        <nav className="
                     flex items-center justify-center gap-8
                     bg-gray-100 dark:bg-zinc-800
                     py-3
                     border-b border-zinc-200 dark:border-zinc-700
                   "
        >
            <CategoriesDropdown />

            <Link
                to="/membership"
                className="
                        tracking-wide text-xl
                        hover:text-zinc-800 dark:hover:text-zinc-100
                        transition-colors
                        "
            >
                Be a member
            </Link>
        </nav>
    )
};

export default SubHeader;