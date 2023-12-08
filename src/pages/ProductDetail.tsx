import { useParams } from 'react-router-dom';
import ProductEntity from '../types/ProductEntity';
import ProductSelected from '../components/Product/ProductSelected';

interface ProductDetailInterface {
    products: ProductEntity[];
}

const ProductDetail = ({ products }: ProductDetailInterface) => {
    const { id } = useParams<{ id: string }>();
    const selectedProduct = products.find((product) => product.id === id);

    if (!selectedProduct) {
        return <div>Produto não encontrado.</div>;
    }

    return (
        <div className="product-detail-container">
            <ProductSelected product={selectedProduct} />
        </div>
    );
};

export default ProductDetail;
