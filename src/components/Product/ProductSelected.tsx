import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import ProductEntity from '../../types/ProductEntity';

import '../../styles/productCard.scss'
import MaskText from '../../utils/MaskText';

interface ProductSelectedInterface {
    product: ProductEntity;
}
interface ProductSelectedProps extends ProductSelectedInterface {
    index?: number | undefined;
    productDetail: boolean;
}

const ProductSelected = ({ product, index, productDetail }: ProductSelectedProps) => {
    const displayIndex = index !== undefined ? index : 0;

    const stagger = 0.2;

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
                delay: displayIndex * stagger,
                ease: "easeInOut",
                duration: 0.5,
            }}
            viewport={{ amount: 0 }}
            className="product-card"
            title="Visualizar produto"
        >
            <Link to={`/product/${product.id}`}>
                <div className="resize-item">
                    <h3>{product.name}</h3>

                    <img src={product.images[0].asset.url} alt={product.images[0].alt} />

                    <p>{product.category.name}</p>
                </div>

                {productDetail &&
                    <p className="short-description" title={product.shortDescription}>
                        <MaskText text={product.shortDescription} maxLength={140} />
                    </p>
                }

            </Link>
        </motion.div>
    );
};

export default ProductSelected;
