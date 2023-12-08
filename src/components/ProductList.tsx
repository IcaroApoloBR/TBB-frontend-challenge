import { useState, useEffect } from 'react';
import ProductEntity from '../types/ProductEntity';
import { Link } from 'react-router-dom';
import '../styles/globals.scss'

interface ProductListProps {
    products: ProductEntity[];
}

const ProductList = ({ products }: ProductListProps) => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [uniqueCategories, setUniqueCategories] = useState<
        { id: string; name: string; count: number }[]
    >([]);
    const [totalProducts, setTotalProducts] = useState<number>(0);

    useEffect(() => {
        // Contagem de itens por categoria
        const categoryCountMap: { [categoryId: string]: number } = {};
        products.forEach((product) => {
            const categoryId = product.category._id;
            categoryCountMap[categoryId] = (categoryCountMap[categoryId] || 0) + 1;
        });

        // Cria um array de objetos { id, name, count }
        const uniqueCategoriesWithCount = Array.from(
            new Set(products.map((product) => product.category._id))
        ).map((categoryId) => ({
            id: categoryId,
            name: products.find((product) => product.category._id === categoryId)?.category.name || '',
            count: categoryCountMap[categoryId] || 0,
        }));

        setUniqueCategories(uniqueCategoriesWithCount);

        // Atualiza o total de produtos
        setTotalProducts(products.length);
    }, [products]);

    const filteredProducts = products.filter((product) => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory =
            selectedCategories.length === 0 || selectedCategories.includes(product.category._id);

        return matchesSearch && matchesCategory;
    });

    return (
        <div>
            <p>Total de Produtos: {totalProducts}</p>
            <input
                type="text"
                placeholder="Buscar por nome"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div>
                <label>Categorias:</label>
                {uniqueCategories.map((category) => (
                    <div key={category.id}>
                        <input
                            type="checkbox"
                            id={category.id}
                            checked={selectedCategories.includes(category.id)}
                            onChange={() => handleCategoryToggle(category.id)}
                        />
                        <label htmlFor={category.id}>
                            {category.name} ({category.count} itens)
                        </label>
                    </div>
                ))}
            </div>

            <div>
                {filteredProducts.map((product) => (
                    <div key={product.id}>
                        <h3>
                            <Link to={`/product/${product.id}`}>{product.name}</Link>
                        </h3>                        <p>{product.shortDescription}</p>
                        <img src={product.images[0].asset.url} alt={product.images[0].alt} />
                        <p>Category: {product.category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );

    function handleCategoryToggle(categoryId: string) {
        if (selectedCategories.includes(categoryId)) {
            setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
        } else {
            setSelectedCategories((prev) => [...prev, categoryId]);
        }
    }
};

export default ProductList;
