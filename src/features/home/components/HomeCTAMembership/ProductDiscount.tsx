import type { Product } from "../../../products/types/products";
import { motion } from 'framer-motion';
import { scaleUp } from "../../../../shared/animations/animations";

interface ProductDiscountProps {
    product: Product;
    originalPrice: number;
    discountedPrice: number;
}

const ProductDiscount = ({
    product,
    originalPrice,
    discountedPrice,
}: ProductDiscountProps) => {
    const API_URL = import.meta.env.VITE_API_URL;

    return (
        <motion.div
            variants={scaleUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col items-center gap-4 text-center"
        >
            <img
                src={`${API_URL}${product.image}`}
                alt={product.name.es ?? "Product"}
                className="h-64 object-contain"
            />

            <span className="text-sm line-through opacity-50">
                ${originalPrice}
            </span>

            <span className="text-5xl font-bold text-green-500">
                ${discountedPrice}
            </span>
        </motion.div>
    )
};

export default ProductDiscount;