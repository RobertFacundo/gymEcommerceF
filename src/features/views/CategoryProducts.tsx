import { useParams } from "react-router-dom";
import { useProductsByCategory } from "../products/hooks/useProducts";
import Breadcrumb from "../products/components/Breadcrumb";
import { AiFillHome } from 'react-icons/ai';
import { CiDumbbell } from "react-icons/ci";
import ProductCard from "../products/components/ProductCard";
import { motion } from 'framer-motion';
import { containerVariants } from "../../shared/animations/animations";
import { useTranslation } from "react-i18next";
import { useCategories } from "../products/hooks/useCategories";

const CategoryProducts = () => {
    const { categorySlug } = useParams();
    const { data: products, isLoading, error } = useProductsByCategory(categorySlug!);
    const { data: categories } = useCategories();

    const API_URL = import.meta.env.VITE_API_URL;
    const category = categories?.find(cat => cat.slug === categorySlug);
    const { i18n } = useTranslation();

    const categoryLabel = category?.name[i18n.language as 'en' | 'es'] ?? categorySlug

    if (isLoading) return <p>Loading products...</p>
    if (error) return <p>Failed to load products</p>

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Breadcrumb
                items={[
                    { label: "home", path: "/", icon: <AiFillHome /> },
                    { label: "Products", path: "/products", icon: <CiDumbbell /> },
                    { label: categoryLabel! }
                ]}
            />

            <motion.div
                key={categorySlug}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {products?.map(product => (
                    <ProductCard
                        key={product._id}
                        name={product.name[i18n.language as 'en' | 'es']}
                        description={product.description[i18n.language as 'en' | 'es']}
                        imageUrl={`${API_URL}${product.image}`}
                        price={product.price}
                    />
                ))}
            </motion.div>
        </div>
    )
};

export default CategoryProducts;