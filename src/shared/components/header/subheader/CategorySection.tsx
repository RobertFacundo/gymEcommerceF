import { Link } from "react-router-dom";

interface CategorySectionProps {
    slug: string;
    name: string;
    description: string;
    image: string;
    apiUrl: string;
}

const CategorySection = ({ slug, name, description, image, apiUrl }: CategorySectionProps) => {
    return (
        <Link
            to={`/products/${slug}`}
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
                    src={`${apiUrl}${image}`}
                    alt={name}
                    className="w-22 h-22 object-contain transition-transform group-hover:scale-105"
                />
                <h4 className="text-base font-medium tracking-wide">
                    {name}
                </h4>
            </div>

            <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-snug">
                {description}
            </p>
        </Link>
    )
}

export default CategorySection;