import { motion } from 'framer-motion';
import TestimonyCard from "./TestimonyCard";
import testimonials from '../data/testimonials.json';
import { containerVariants, itemVariants } from "../../../../shared/animations/animations";
import { useTranslation } from "react-i18next";

const mockUsers = [
    { picture: { large: "/mock-users/jane.jpg" }, name: { first: "Jane", last: "Doe" }, dob: { age: 30 }, location: { country: "USA" } },
    { picture: { large: "/mock-users/facundo.png" }, name: { first: "Facundo", last: "Robert" }, dob: { age: 30 }, location: { country: "Argentina" } },
    { picture: { large: "/mock-users/mary.jpg" }, name: { first: "Mary", last: "Smith" }, dob: { age: 28 }, location: { country: "UK" } },
];

const HomeTestimonials = () => {
    const { i18n } = useTranslation();

    const comments =
        testimonials[i18n.language as 'es' | 'en'] ?? testimonials.en

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
                    {mockUsers.map((user, index) => (
                        <motion.div key={index} variants={itemVariants}>
                            <TestimonyCard
                                avatar={user.picture.large}
                                name={`${user.name.first} ${user.name.last}`}
                                country={user.location.country}
                                age={user.dob.age}
                                rating={5}
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