import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animations";
import { useTranslation } from "react-i18next";

const FooterProfile = () => {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col gap-4">

            {/* Avatar + Name */}
            <motion.div variants={fadeIn} className="flex items-center gap-4">
                <img
                    src="/footerAvatar.jpg"
                    alt="Facundo Robert"
                    className="
          w-16 h-16
          rounded-full
          object-cover
          border border-neutral-300
          dark:border-neutral-700
        "
                />

                <h3 className="text-xl font-semibold">
                    Facundo Robert
                </h3>
            </motion.div>

            {/* Description full width */}
            <motion.p variants={fadeIn} className="text-sm text-neutral-600 text-center dark:text-neutral-400 leading-relaxed text-center max-w-md mx-auto md:mx-0 tracking-wide border-b pb-2 dark:border-white/20 border-black/20">
                {t('footer.profile')}
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-col gap-1">
                <a
                    href="https://facundorobert.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                >
                    Portfolio
                </a>
            </motion.div>
        </div>
    )
};

export default FooterProfile;