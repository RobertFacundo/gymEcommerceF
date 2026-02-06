import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
    { label: "Proteins", slug: "proteins" },
    { label: "Creatine", slug: "creatine" },
    { label: "Accessories", slug: "accessories" },
];


const CategoriesDropdown = () => {
    const [open, setOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setOpen(true)}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="tracking-wide text-xl hover:text-zinc-800 dark:hover:text-zinc-100 cursor-pointer">
                Products
            </button>
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
                        <div className="grid grid-cols-3 gap-8">
                            {categories.map(cat => (
                                <Link
                                    key={cat.slug}
                                    to={`/products/${cat.slug}`}
                                    className="
                                            group
                                            p-4 rounded-lg
                                            hover:bg-zinc-100 dark:hover:bg-zinc-800
                                            transition-colors
                                        "
                                >
                                    <h4 className="text-base font-medium tracking-wide">
                                        {cat.label}
                                    </h4>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                        Explore {cat.label.toLowerCase()}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

export default CategoriesDropdown;