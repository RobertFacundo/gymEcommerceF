import TopBar from "./top/TopBar";
import MainHeader from "./main/MainHeader";
import SubHeader from "./subheader/SubHeader";
import { motion } from 'framer-motion';
import { headerVariants } from "../../animations/animations";

const Header = () => {
    return (
        <motion.header
            className="w-full"
            initial="initial"
            animate="animate"
            variants={headerVariants}
        >
            <TopBar />
            <MainHeader />
            <SubHeader />
        </motion.header>
    )
};

export default Header;