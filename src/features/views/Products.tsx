import { Link } from "react-router-dom";
import { useCategories } from "../products/hooks/useCategories";
import Breadcrumb from "../products/components/Breadcrumb";
import {AiFillHome} from 'react-icons/ai';
import {CiDumbbell} from 'react-icons/ci'

const Products = () => {
    const { data: categories, isLoading, error } = useCategories();
    const API_URL = import.meta.env.VITE_API_URL;

    if (isLoading) return <p>Loading categories...</p>
    if (error) return <p>Failed to laod categories</p>

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Breadcrumb items={[
                { label: "home", path: "/", icon: <AiFillHome /> },
                { label: "Products", path: "/products", icon: <CiDumbbell /> },
            ]} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {categories?.map(cat => (
                    <div
                        key={cat.slug}
                        className="border rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow"
                    >
                        <img src={`${API_URL}${cat.image}`} alt={cat.name.en} className="w-24 h-24 object-contain" />
                        <h2 className="text-lg font-medium text-center">{cat.name.en}</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">
                            {cat.description.en}
                        </p>
                        <Link to={`/products/${cat.slug}`}
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                            Explore
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Products;