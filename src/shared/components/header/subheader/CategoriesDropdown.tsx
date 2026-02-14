import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCategories } from "../../../../features/products/hooks/useCategories";
import CategorySection from "./CategorySection";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from "../../../animations/animations";

const CategoriesDropdown = () => {
    const [open, setOpen] = useState(false);
    const { data: categories, isLoading, error } = useCategories();
    const location = useLocation();
    const API_URL = import.meta.env.VITE_API_URL;
    const { i18n } = useTranslation();
    const { t } = useTranslation();

    const disabledHover = location.pathname !== '/';

    useEffect(() => {
        setOpen(false);
    }, [location.pathname]);

    return (
        <div
            className="relative "
            onMouseEnter={() => !disabledHover && setOpen(true)}
            onMouseLeave={() => !disabledHover && setOpen(false)}
        >
            <Link to="/products" className="tracking-wide text-xl hover:text-zinc-800 dark:hover:text-zinc-100 cursor-pointer">
                {t("header.products")}
            </Link>
            <div className="absolute -left-[30%] -translate-x-1/3 top-full pt-3">
                <AnimatePresence>
                    {open && (
                        <motion.div
                            className="
                                w-screen max-w-6xl
                                rounded-xl
                                bg-white dark:bg-zinc-900
                                shadow-lg
                                border border-zinc-200 dark:border-zinc-700
                                p-2
                                z-20
                                
                             "
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            variants={fadeIn}
                        >
                            {isLoading && (
                                <p className="p-4 text-sm text-zinc-500">
                                    Loading categories…
                                </p>
                            )}

                            {error && (
                                <p className="p-4 text-sm text-red-500">
                                    Failed to load categories
                                </p>
                            )}
                            {categories && (<div className="grid grid-cols-4 gap-2">
                                {categories.map(cat => (
                                    <CategorySection
                                        key={cat.slug}
                                        slug={cat.slug}
                                        name={cat.name[i18n.language as 'en' | 'es']}
                                        description={cat.description[i18n.language as 'en' | 'es']}
                                        image={cat.image}
                                        apiUrl={API_URL}
                                    />
                                ))}
                            </div>)}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
};

export default CategoriesDropdown;