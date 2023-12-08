import '../../styles/productCard.scss'

interface ProductCountTotalInterface {
    totalProducts: number;
}

const ProductCountTotal = ({ totalProducts }: ProductCountTotalInterface) => {
    return <p className="count-products">Produtos exibidos: <b>{totalProducts}</b></p>;
};

export default ProductCountTotal;
