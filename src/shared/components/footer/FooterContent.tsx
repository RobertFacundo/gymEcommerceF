import FooterLinks from "./FooterLinks";
import FooterProfile from "./FooterProfile";
import FooterSocial from "./FooterSocial";
import { motion } from 'framer-motion';
import { fadeIn } from "../../animations/animations";

const FooterContent = () => {
    return (
        <div className=" 
                grid
                grid-cols-1
                md:grid-cols-[2fr_1fr_1fr]
                gap-12
                w-full
                text-center md:text-left
                dark:text-white
                "
        >
            <motion.div variants={fadeIn}>
                <FooterProfile />
            </motion.div>
            <motion.div variants={fadeIn}>
                <FooterLinks />
            </motion.div>
            <motion.div variants={fadeIn}>
                <FooterSocial />
            </motion.div>
        </div>
    );
};

export default FooterContent;