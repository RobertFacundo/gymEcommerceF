import { footerProjects } from "../../config/footerProjects";
import { motion } from 'framer-motion'
import { fadeIn } from "../../animations/animations";
import { useTranslation } from "react-i18next";

const FooterLinks = () => {
    const { t } = useTranslation();
    return (
        <nav className="mt-12">
            <h4 className="text-lg font-medium mb-4 tracking-widest border-b border-black/30 dark:border-white/30">
                <motion.span variants={fadeIn}>
                    {t('footer.projects')}
                </motion.span>
            </h4>
            <ul className="space-y-2 text-sm">
                {footerProjects.map(project => (
                    <motion.li key={project.url} variants={fadeIn}>
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-neutral-800 dark:text-neutral-200 hover:underline"
                        >
                            {project.label}
                        </a>
                    </motion.li>
                ))}
            </ul>
        </nav>
    )
};

export default FooterLinks;