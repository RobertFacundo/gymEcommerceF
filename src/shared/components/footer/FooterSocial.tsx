import { motion } from "framer-motion";
import { footerSocialLinks } from "../../config/footerSocial";
import { fadeIn } from "../../animations/animations";
import { useTranslation } from "react-i18next";

const FooterSocial = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-12 text-center">
      <motion.h2 variants={fadeIn} className="text-lg mb-4 tracking-widest">
        {t('footer.contact')}
      </motion.h2>
      <div className="flex gap-4 justify-center md:justify-start">
        {footerSocialLinks.map(({ name, href, icon: Icon }) => (
          <motion.a
            key={name}
            variants={fadeIn}
            href={href}
            target={name !== "Email" ? "_blank" : undefined}
            rel={name !== "Email" ? "noopener noreferrer" : undefined}
            aria-label={name}
            className="p-2 rounded-md hover:text-primary text-neutral-400 hover:text-white hover:bg-neutral-800/40 transition"
          >
            <Icon className="w-10 h-10" />
          </motion.a>
        ))}
      </div>
    </div>
  )
};

export default FooterSocial;