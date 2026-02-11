import { useState } from "react";
import { Link } from "react-router-dom";
import { useCategories } from "../../../features/products/hooks/useCategories";

const CategoriesDropdown = () => {
    const [open, setOpen] = useState(false);
    const { data: categories, isLoading, error } = useCategories();

    const API_URL = import.meta.env.VITE_API_URL;

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <Link to="/products" className="tracking-wide text-xl hover:text-zinc-800 dark:hover:text-zinc-100 cursor-pointer">
                Products
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                {open && (
                    <div
                        className="
                               w-screen max-w-6xl
                               rounded-xl
                               bg-white dark:bg-zinc-900
                               shadow-lg
                               border border-zinc-200 dark:border-zinc-700
                               p-2
                               z-20
                               
                            "
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
                                <Link
                                    key={cat.slug}
                                    to={`/products/${cat.slug}`}
                                    className="
                                            group
                                            p-4 rounded-lg
                                            hover:bg-zinc-100 dark:hover:bg-zinc-800
                                            transition-colors
                                            flex flex-col gap-2
                                        "
                                >
                                    <div className="flex items-center gap-3 min-h-[40px]">
                                        <img
                                            src={`${API_URL}${cat.image}`}
                                            alt={cat.name.en}
                                            className="w-22 h-22 object-contain transition-transform group-hover:scale-105"
                                        />
                                        <h4 className="text-base font-medium tracking-wide">
                                            {cat.name.en}
                                        </h4>
                                    </div>

                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                                        {cat.description.en}
                                    </p>
                                </Link>
                            ))}
                        </div>)}
                    </div>
                )}
            </div>
        </div>
    )
};

export default CategoriesDropdown;