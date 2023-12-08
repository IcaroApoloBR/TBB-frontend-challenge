import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import ProductEntity from '../../types/ProductEntity';

import '../../styles/productCard.scss'

interface ProductSelectedInterface {
    product: ProductEntity;
    index: number
}

const ProductSelected = ({ product, index }: ProductSelectedInterface) => {
    const stagger = 0.15;

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
                delay: index * stagger,
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            className="product-card"
            title="Visualizar produto"
        >
            <Link to={`/product/${product.id}`}>
                <img src={product.images[0].asset.url} alt={product.images[0].alt} />
                <h3>{product.name}</h3>
                <p>{product.category.name}</p>
            </Link>
        </motion.div>
    );
};

export default ProductSelected;
