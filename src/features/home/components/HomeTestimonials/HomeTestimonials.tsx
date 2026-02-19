import { motion } from 'framer-motion';
import TestimonyCard from "./TestimonyCard";
import testimonials from '../data/testimonials.json';
import { containerVariants, itemVariants } from "../../../../shared/animations/animations";
import { useTranslation } from "react-i18next";
import { useRandomUsers } from "../../hooks/useRandomUser";

const HomeTestimonials = () => {
    const { i18n } = useTranslation();
    const { data: users = [], isLoading } = useRandomUsers();

    const comments =
        testimonials[i18n.language as 'es' | 'en'] ?? testimonials.en

    if (isLoading || !users.length) return null;

    return (
        <section className="py-10">
            <div className="max-w-full mx-auto px-8">
                 <div className="w-4/5 mx-auto border-t border-black/10 dark:border-white/10 mb-10" />
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ amount: 0.4 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {users.map((user, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <TestimonyCard
                                avatar={user.picture.large}
                                name={`${user.name.first} ${user.name.last}`}
                                country={user.location.country}
                                age={user.dob.age}
                                rating={Math.floor(Math.random() * 3) + 3}
                                comment={comments[index % comments.length]}
                            />
                        </motion.div>
                    ))}
                </motion.div>
                <div className="w-4/5 mx-auto border-b border-black/10 dark:border-white/10 mt-10" />
            </div>
        </section>
    );
};

export default HomeTestimonials;