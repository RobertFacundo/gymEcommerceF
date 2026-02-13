import type { FC } from "react";
import { motion } from 'framer-motion';
import { itemVariants } from "../../../shared/animations/animations";

interface ProductProps {
    name: string,
    imageUrl: string,
    description: string,
    price: number
};

const ProductCard: FC<ProductProps> = ({ name, imageUrl, description, price }) => {
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
                src={imageUrl}
                alt={name}
                className="w-60 h-60 object-contain shrink-0"
            />

            <div className="flex flex-col justify-between text-black dark:text-white">
                <div>
                    <h2 className="text-2xl ">{name}</h2>
                    <p className="text-sm mt-1 tracking-widest mt-5 text-black/60 dark:text-white/60 text-right">
                        {description}
                    </p>
                </div>

                <div className="flex flex-row justify-around border-t
                                border-black/20 dark:border-white/20 pt-3">
                    <p className="text-lg font-bold ">${price}</p>
                    <button className="text-lg cursor-pointer font-sans tracking-wide">Add to cart</button>
                </div>
            </div>
        </motion.div>
    )
};

export default ProductCard;