import { Link } from 'react-router-dom';
import ProductEntity from '../../types/ProductEntity';

interface ProductSelectedInterface {
    product: ProductEntity;
}

const ProductSelected = ({ product }: ProductSelectedInterface) => {
    return (
        <div>
            <h3>
                <Link to={`/product/${product.id}`}>{product.name}</Link>
            </h3>
            <p>{product.shortDescription}</p>
            <img src={product.images[0].asset.url} alt={product.images[0].alt} />
            <p>Category: {product.category.name}</p>
        </div>
    );
};

export default ProductSelected;
