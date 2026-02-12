import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../products/hooks/useProducts";
import Breadcrumb from "../products/components/Breadcrumb";
import { AiFillHome } from 'react-icons/ai';
import { CiDumbbell } from "react-icons/ci";
import ProductCard from "../products/components/ProductCard";

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
                    <ProductCard
                        key={product._id}
                        name={product.name.en}
                        description={product.description.en}
                        imageUrl={`${API_URL}${product.image}`}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
};

export default CategoryProducts;