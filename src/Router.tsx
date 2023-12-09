import { Routes, Route } from 'react-router-dom';

import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

import LayoutDefault from './components/Layout/LayoutDefault';

import productsCategory from './data/productsCategory.json';

export function Router() {
    const products = productsCategory.data.nodes;

    return (

        <Routes>
            <Route path="/"
                element={
                    <LayoutDefault>
                        <Products products={products} />
                    </LayoutDefault>
                }
            />

            <Route path="/product/:id"
                element={
                    <LayoutDefault>
                        <ProductDetail products={products} productDetail={true} />
                    </LayoutDefault>
                }
            />
        </Routes>
    );
}
