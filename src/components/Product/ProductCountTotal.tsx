interface ProductCountTotalInterface {
    totalProducts: number;
}

const ProductCountTotal = ({ totalProducts }: ProductCountTotalInterface) => {
    return <p>Total de Produtos: {totalProducts}</p>;
};

export default ProductCountTotal;
