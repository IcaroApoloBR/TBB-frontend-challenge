
import { useParams } from 'react-router-dom';
import ProductEntity from '../types/ProductEntity';

interface ProductDetailProps {
    products: ProductEntity[];
}

const ProductDetail = ({ products }: ProductDetailProps) => {
    const { id } = useParams();
    const product: ProductEntity | undefined = products.find((p) => p.id === id);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div>
            <h2>{product.name}</h2>
            <p>{product.shortDescription}</p>
            <img src={product.images[0].asset.url} alt={product.images[0].alt} />
            <p>Category: {product.category.name}</p>
        </div>
    );
};

export default ProductDetail;
