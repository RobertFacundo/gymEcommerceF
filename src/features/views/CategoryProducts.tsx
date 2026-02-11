import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../products/hooks/useProducts";
import Breadcrumb from "../products/components/Breadcrumb";
import { AiFillHome } from 'react-icons/ai';
import { CiDumbbell } from "react-icons/ci";

const CategoryProducts = () => {
    const { categorySlug } = useParams();
    const { data: products, isLoading, error } = useProductsByCategory(categorySlug!);
    const API_URL = import.meta.env.VITE_API_URL;

    if (isLoading) return <p>Loading products...</p>
    if (error) return <p>Failed to load products</p>

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Breadcrumb
                items={[
                    { label: "home", path: "/", icon: <AiFillHome /> },
                    { label: "Products", path: "/products", icon: <CiDumbbell /> },
                    { label: categorySlug! }
                ]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products?.map(product => (
                    <div key={product._id} className="border rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-lg transition-shadow">
                        <img src={`${API_URL}${product.image}`} alt={product.name.en} className="w-24 h-24 object-contain" />
                        <h2 className="text-lg font-medium text-center">{product.name.en}</h2>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center">{product.description.en}</p>
                        <p className="font-bold">${product.price}</p>
                        {/* botón futuro de Add to Cart */}
                    </div>
                ))}
            </div>
        </div>
    )
};

export default CategoryProducts;