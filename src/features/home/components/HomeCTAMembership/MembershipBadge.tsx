import { motion } from 'framer-motion';
import { itemVariants } from '../../../../shared/animations/animations';
import { useTranslation } from 'react-i18next';

interface MembershipBadgeProps {
    discount: number;
}

const MembershipBadge = ({ discount }: MembershipBadgeProps) => {
    const { t } = useTranslation();

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
                {t('home.CTAmembership.membership')}
            </motion.span>

            <motion.h3
                variants={itemVariants}
                className="text-3xl font-semibold leading-tight"
            >
                {t('home.CTAmembership.title')}
            </motion.h3>

            <motion.ul
                variants={itemVariants}
                className="flex flex-col gap-3 text-sm"
            >
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {discount}{t('home.CTAmembership.ul1')}
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {t('home.CTAmembership.ul2')}
                </li>
                <li className="flex items-center gap-2">
                    <span className="text-green-500">✓</span>
                    {t('home.CTAmembership.ul3')}
                </li>
            </motion.ul>
        </motion.div>
    )
};

export default MembershipBadge;