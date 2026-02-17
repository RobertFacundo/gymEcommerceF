import { Truck, ShieldCheck, Dumbbell, Headphones } from "lucide-react";
import { useTranslation } from "react-i18next";
import { homeHighlights, type HomeHighlight } from "../data/highLightsData";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, scaleUp } from "../../../../shared/animations/animations";

const iconMap: Record<HomeHighlight['icon'], React.ReactNode> = {
    shipping: <Truck size={46} />,
    secure: <ShieldCheck size={46} />,
    quality: <Dumbbell size={46} />,
    support: <Headphones size={46} />,
}

const HomeHighlights = () => {
    const { t } = useTranslation();

    return (
        <section className="w-full bg-white/60 dark:bg-zinc-900/60 mt-10">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <motion.div
                    variants={containerVariants}
                    initial='initial'
                    whileInView="animate"
                    viewport={{ amount: 0.6 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                >
                    {homeHighlights.map((item) => (
                        <motion.div
                            key={item.id}
                            variants={itemVariants}
                            className="flex flex-col items-center gap-1 font-sans"
                        >
                            <motion.div
                                variants={scaleUp}
                                className="text-black dark:text-white transition-transform duration-300 hover:scale-105"
                            >
                                {iconMap[item.icon]}
                            </motion.div>
                            <h3 className="text-black dark:text-white">
                                {t(item.titleKey)}
                            </h3>
                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                {t(item.subtitleKey)}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
};

export default HomeHighlights;