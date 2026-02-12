import type { JSX } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { scaleUp } from "../../../shared/animations/animations";

interface BreadcrumbItem {
    label: string;
    path?: string;
    icon?: JSX.Element;
}

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
    return (
        <motion.nav
            className="text-xl mb-4"
            aria-label="breadcrumb"
            variants={scaleUp}     
            initial="initial"
            animate="animate"
            exit="exit"
        >
            <ol className="flex flex-wrap gap-1 text-zinc-500 dark:text-zinc-400">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-1">
                        {item.path ? (
                            <Link to={item.path} className="flex items-center gap-1 hover:underline">
                                {item.icon && <span className="text-2xl">{item.icon}</span>}
                            </Link>
                        ) : (
                            <span className="flex items-center gap-1 capitalize">
                                {item.icon && <span className="text-4xl">{item.icon}</span>}
                                {item.label}
                            </span>
                        )}
                        {index < items.length - 1 && <span>/</span>}
                    </li>
                ))}
            </ol>
        </motion.nav>
    )
};

export default Breadcrumb;