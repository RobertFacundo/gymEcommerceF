import { useCategories } from "../products/hooks/useCategories";
import Breadcrumb from "../products/components/Breadcrumb";
import { AiFillHome } from 'react-icons/ai';
import { CiDumbbell } from 'react-icons/ci'
import CategoryCard from "../products/components/CategoryCard";
import { motion } from 'framer-motion';
import { containerVariants } from "../../shared/animations/animations";
import { useTranslation } from "react-i18next";

const Products = () => {
    const { data: categories, isLoading, error } = useCategories();
    const API_URL = import.meta.env.VITE_API_URL;
    const { i18n } = useTranslation();

    if (isLoading) return <p>Loading categories...</p>
    if (error) return <p>Failed to laod categories</p>

    return (
        <div className="max-w-6xl mx-auto p-4">
            <Breadcrumb items={[
                { label: "home", path: "/", icon: <AiFillHome /> },
                { label: "Products", path: "/products", icon: <CiDumbbell /> },
            ]} />
            <motion.div
                className="flex flex-col gap-6"
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                {categories?.map(cat => (
                    <CategoryCard
                        key={cat.slug}
                        slug={cat.slug}
                        name={cat.name[i18n.language as 'en' | 'es']}
                        description={cat.description[i18n.language as 'en' | 'es']}
                        imageUrl={`${API_URL}${cat.image}`}
                    />
                ))}
            </motion.div>
        </div>
    )
};

export default Products;