import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const TopBar = () => {
    const [visible, setVisible] = useState(true);
    const { t } = useTranslation();

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="w-full bg-yellow-400 text-black flex items-center justify-center relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                >
                    <p className="text-center text-sm">
                        {t("header.topBar")}
                    </p>
                    <button
                        onClick={() => setVisible(false)}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-black font-bold cursor-pointer"
                        aria-label="Close TopBar"
                    >
                        ✕
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    )
};

export default TopBar;