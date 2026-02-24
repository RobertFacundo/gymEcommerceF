import type { FC } from "react";
import { motion } from 'framer-motion';
import { itemVariants } from "../../../shared/animations/animations";
import { useCart } from "../../cart/hooks/useCart";
import { useTranslation } from "react-i18next";

interface ProductProps {
    productId: string,
    name: { en: string; es: string }; // <- ahora un objeto
    image: string;
    description: string,
    price: number
};

const ProductCard: FC<ProductProps> = ({ productId, name, image, description, price }) => {
    const { addProduct } = useCart();
    const {i18n} = useTranslation();

    const handleAddToCart = () => {
        addProduct.mutate({
            productId,
            name,
            image,
            price,
            quantity: 1
        })
    }

    const currentLang = i18n.language as 'en' | 'es';
    return (
        <motion.div
            variants={itemVariants}
            className="
                 flex gap-5 p-4 rounded-xl
                 dark:bg-black/60 bg-white/60
                 hover:scale-[1.03] hover:shadow-xl
                 transition-all duration-300 ease-out
            "
        >
            <img
                src={image}
                alt={name[currentLang]}
                className="w-60 h-60 object-contain shrink-0"
            />

            <div className="flex flex-col justify-between text-black dark:text-white">
                <div>
                    <h2 className="text-2xl ">{name[currentLang]}</h2>
                    <p className="text-sm mt-1 tracking-widest mt-5 text-black/60 dark:text-white/60 text-right">
                        {description}
                    </p>
                </div>

                <div className="flex flex-row justify-around border-t
                                border-black/20 dark:border-white/20 pt-3">
                    <p className="text-lg font-bold ">${price}</p>
                    <button
                        onClick={handleAddToCart}
                        className="text-lg cursor-pointer font-sans tracking-wide">
                        Add to cart
                    </button>
                </div>
            </div>
        </motion.div>
    )
};

export default ProductCard;