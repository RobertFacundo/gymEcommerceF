import { motion } from "framer-motion";
import { fadeIn } from "../../animations/animations";

const FooterImage = () => {
    return (
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="show"
            className="
                    hidden lg:block
                    absolute top-0 right-0
                    h-full
                    w-[35vw]
                    max-w-[520px]
                    bg-no-repeat
                    bg-right
                    bg-contain
                    opacity-80
                    pointer-events-none
                    mt-1
                    z-50
                "
            style={{ backgroundImage: "url('/footerImage.jpg')" }}
        />
    )
};

export default FooterImage;