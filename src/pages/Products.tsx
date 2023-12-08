import { useState, useEffect } from 'react';

import ProductCountTotal from '../components/Product/ProductCountTotal';
import ProductSelected from '../components/Product/ProductSelected';
import SearchBar from '../components/Filters/SearchBar';
import CategoryFilter from '../components/Filters/CategoryFilter';

import ProductEntity from '../types/ProductEntity';

import '../styles/section.scss';

interface ProductsInterface {
  products: ProductEntity[];
}

const Products = ({ products }: ProductsInterface) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<
    { id: string; name: string; count: number }[]
  >([]);

  useEffect(() => {
    const categoryCounts: { [categoryId: string]: number } = {};

    products.reduce((acc, product) => {
      const categoryId = product.category._id;
      acc[categoryId] = (acc[categoryId] || 0) + 1;
      return acc;
    }, categoryCounts);

    const uniqueCategoriesWithCount = Object.keys(categoryCounts).map((categoryId) => ({
      id: categoryId,
      name: products.find((product) => product.category._id === categoryId)?.category.name || '',
      count: categoryCounts[categoryId] || 0,
    }));

    setUniqueCategories(uniqueCategoriesWithCount);
  }, [products]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(product.category._id);

    return matchesSearch && matchesCategory;
  });

  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories((prev) => [...prev, categoryId]);
    }
  };

  return (
    <section className="section">
      <main className="products">

        <aside className="aside-filters">
          <ProductCountTotal
            totalProducts={filteredProducts.length}
          />

          <SearchBar
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />

          <CategoryFilter
            uniqueCategories={uniqueCategories}
            selectedCategories={selectedCategories}
            onCategoryToggle={handleCategoryToggle}
          />
        </aside>

        <div className="products-list">
          {filteredProducts.length > 0 ? (
            <div className="products-list">
              {filteredProducts.map((product, index) => (
                <ProductSelected key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <p className="not-found">* Infelizmente não foi possível encontrar nenhum produto com sua busca.</p>
          )}
        </div>
      </main>
    </section>
  );
};

export default Products;
