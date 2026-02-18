import { useMemo } from "react";
import { useProducts } from "../../../products/hooks/useProducts";
import MembershipBadge from "./MembershipBadge";
import ProductDiscount from "./ProductDiscount";
import { motion } from 'framer-motion';
import { containerVariants } from "../../../../shared/animations/animations";

const DISCOUNT_PERCENT = 30

const HomeCTAMembership = () => {
    const { data: products = [], isLoading } = useProducts();
    const product = useMemo(() => {
        if (!products.length) return null;

        return products[Math.floor(Math.random() * products.length)];
    }, [products]);

    if (isLoading || !product) return null;

    const originalPrice = product.price;
    const discountedPrice = Math.round(
        originalPrice * (1 - DISCOUNT_PERCENT / 100)
    );

    return (
        <section>
            <div className="max-w-7xl mx-auto px-2">
                <motion.div
                    variants={containerVariants}
                    initial='initial'
                    whileInView="animate"
                    viewport={{ amount: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center
                                bg-white/60 dark:bg-black/60 p-10
                                rounded-2xl
                                "
                >
                    <MembershipBadge discount={DISCOUNT_PERCENT} />
                    <ProductDiscount
                        product={product}
                        originalPrice={originalPrice}
                        discountedPrice={discountedPrice}
                    />
                </motion.div>
            </div>
        </section>
    )
};

export default HomeCTAMembership;