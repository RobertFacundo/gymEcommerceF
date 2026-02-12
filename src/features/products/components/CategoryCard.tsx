import { Link } from "react-router-dom";
import type { FC } from "react";
import { motion } from 'framer-motion';
import { fadeIn, itemVariants } from "../../../shared/animations/animations";
import { useTranslation } from "react-i18next";

interface CategoryCardProps {
    slug: string;
    name: string;
    description: string;
    imageUrl: string
}

const CategoryCard: FC<CategoryCardProps> = ({ slug, name, description, imageUrl }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            className="relative rounded-lg overflow-hidden h-64 w-full 
                       hover:scale-[1.03] transition-transform transition-shadow
                       duration-300 ease-in-out shadow-lg hover:shadow-2xl"
            variants={itemVariants}
        >
            {/* Imagen de fondo */}
            <img src={imageUrl} alt={name} className="absolute inset-0 w-full h-full object-cover" />

            {/* Overlay diagonal */}
            <motion.div
                className="absolute top-0 right-0 bottom-0 p-4 pl-10 text-white flex flex-col justify-between bg-black/60"
                style={{
                    clipPath: "polygon(31% 0%, 100% 0%, 100% 100%, 0% 100%)"
                }}
                variants={fadeIn}       // overlay se anima con fadeIn
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ delay: 0.2 }}
            >
                <h2 className="text-2xl text-right tracking-widest">{name}</h2>
                <p className="text-sm text-right mt-5 tracking-wider max-w-65 ml-5 font-sans tracking-wide">{description}</p>
                <h1 className="text-right">
                    <Link
                        to={`/products/${slug}`}
                        className="inline-block mt-2 px-4 py-1 rounded 
                                    bg-white/30 hover:bg-white hover:text-black 
                                    dark:bg-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white
                                    transition-colors duration-400 ease-in-out"
                    >
                        {t('categories.explore')}
                    </Link>
                </h1>
            </motion.div>
        </motion.div>
    )
};

export default CategoryCard;