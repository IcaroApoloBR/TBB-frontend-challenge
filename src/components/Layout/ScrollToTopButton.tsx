import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import '../../styles/globals.scss'

const ScrollToTopButton = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScrollButtonVisibility = () => {
            window.pageYOffset > 1 ? setShowButton(true) : setShowButton(false);
        };

        window.addEventListener('scroll', handleScrollButtonVisibility);
        return () => {
            window.removeEventListener('scroll', handleScrollButtonVisibility);
        };
    }, [])

    return (
        <AnimatePresence>
            {showButton && (
                <motion.button
                    initial={{ opacity: 0, right: -10 }}
                    animate={{ opacity: 1, right: 16 }}
                    exit={{ opacity: 0, right: -10 }}
                    onClick={handleScrollToTop}
                    className="scroll-to-top"
                >
                    SUBIR
                </motion.button>
            )}
        </AnimatePresence>
    )
}

export default ScrollToTopButton