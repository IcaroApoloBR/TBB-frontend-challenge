import { Link, useParams } from 'react-router-dom';
import ProductEntity from '../types/ProductEntity';
import ProductSelected from '../components/Product/ProductSelected';
import '../styles/productCard.scss';

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
        <div className="product-details">
            <Link to="/" className="go-back">Voltar aos produtos</Link>

            <ProductSelected product={selectedProduct} productDetail />
        </div>
    );
};

export default ProductDetail;
