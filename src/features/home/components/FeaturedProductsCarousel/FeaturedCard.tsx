import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import {scaleUp } from "../../../../shared/animations/animations";

interface FeaturedProductCardProps {
    product: {
        _id: string;
        image: string;
        category: string;
    };
    imageBaseUrl: string;
}

const FeaturedCard = ({ product, imageBaseUrl }: FeaturedProductCardProps) => {
    const navigate = useNavigate();

    return (
        <motion.div
            variants={scaleUp}
            key={product._id}
            className="flex-[0_0_70%] sm:flex-[0_0_33%] lg:flex-[0_0_15%] px-2 cursor-pointer"
            onClick={() =>
                navigate(`/products/${product.category}`)
            }
        >
            <div className="
                            transition-transform duration-300 ease-out
                            scale-95 opacity-90
                            hover:scale-110 hover:opacity-100
                        "
            >
                <img
                    src={`${imageBaseUrl}${product.image}`}
                    alt={product._id}
                    className="mx-auto h-58 object-contain"
                />
            </div>
        </motion.div>
    )
};

export default FeaturedCard;