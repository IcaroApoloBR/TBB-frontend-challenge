import { motion } from 'framer-motion';
import { socials } from '../../constants';
import ScrollToTopButton from './ScrollToTopButton';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0 }}
            className="footer"
        >
            <div className="component">
                <div className="items">
                    <a href="#">Ícaro Apolo</a>
                    <div className="items-social">
                        {socials.map((social) => (
                            <div key={social.name}>
                                <a href={social.href} target="_blank" className="social">
                                    <img
                                        alt={social.name}
                                        src={social.url}
                                        className="social-img"
                                    />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <ScrollToTopButton />
        </motion.footer >
    )
}

export default Footer