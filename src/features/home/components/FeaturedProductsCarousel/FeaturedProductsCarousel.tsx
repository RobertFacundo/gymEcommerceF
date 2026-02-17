import { useProducts } from "../../../products/hooks/useProducts";
import FeaturedCard from "./FeaturedCard";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from 'framer-motion';
import { containerVariants, headerVariants } from "../../../../shared/animations/animations";

const VISIBLE_ITEMS = 6;

const FeaturedProductsRow = () => {
    const { data: products = [], isLoading } = useProducts();
    const API_URL = import.meta.env.VITE_API_URL;
    const { t } = useTranslation();

    const featured = useMemo(() => {
        return [...products]
            .sort(() => 0.5 - Math.random())
            .slice(0, VISIBLE_ITEMS);
    }, [products]);

    if (isLoading) return null;

    return (
        <section className="py-20">
            <motion.h2
                variants={headerVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: false, amount: 0.6 }}
                className="text-3xl text-center mb-10 tracking-widest"
            >
                {t('home.featured')}
            </motion.h2>

            <div className="bg-white/60 dark:bg-zinc-900/60">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ amount: 0.6 }}
                    className="flex gap-4 justify-center"
                >
                    {featured.map((product) => (
                        <FeaturedCard
                            key={product._id}
                            product={product}
                            imageBaseUrl={API_URL}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedProductsRow;