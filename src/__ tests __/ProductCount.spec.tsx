import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ProductCountTotal from "../components/Product/ProductCountTotal";

test('renders component ProductCountTotal correctly', () => {
    const { getByText } = render(<ProductCountTotal totalProducts={10} />);
    const linkElement = getByText(/Produtos exibidos/i);
    expect(linkElement).toBeInTheDocument();
});