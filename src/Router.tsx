import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductSelected';
import productsCategory from './data/productsCategory.json';
import LayoutDefault from './components/Layout/LayoutDefault';
import '../src/styles/globals.scss'

export function Router() {
    const products = productsCategory.data.nodes;
    return (

        <Routes>

            {/* <Route path="/" element={<ProductList products={products} />} />
            <Route path="/product/:id" element={<ProductDetail products={products} />} /> */}

            <Route path="/"
                element={
                    <LayoutDefault>
                        <ProductList products={products} />
                    </LayoutDefault>
                }
            />


            <Route path="/product/:id"
                element={
                    <LayoutDefault>
                        <ProductDetail products={products} />
                    </LayoutDefault>
                }
            />
        </Routes>
    );
}
