import { motion } from 'framer-motion';
import { itemVariants } from '../../../../shared/animations/animations';

interface MembershipBadgeProps {
    discount: number;
}

const MembershipBadge = ({ discount }: MembershipBadgeProps) => {
    return (
        <motion.div
            variants={itemVariants}
            className="flex flex-col gap-6 max-w-md border-r border-black/60 dark:border-white/60"
        >
            <motion.span
                variants={itemVariants}
                className="inline-block w-fit px-4 py-1 text-sm tracking-widest border rounded-full"
            >
                <span className="text-yellow-500 text-2xl pr-1">★</span>
                MEMBERSHIP
            </motion.span>

            <motion.h3
                variants={itemVariants}
                className="text-3xl font-semibold leading-tight"
            >
                Unlock exclusive benefits
            </motion.h3>

            <motion.ul
                variants={itemVariants}
                className="flex flex-col gap-3 text-sm"
            >
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {discount}% off selected products
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Early access to new releases
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    Members-only offers
                </li>
            </motion.ul>
        </motion.div>
    )
};

export default MembershipBadge;