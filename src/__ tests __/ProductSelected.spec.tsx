import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductEntity from '../types/ProductEntity';
import ProductSelected from '../components/Product/ProductSelected';

test('component ProductSelected navigates to the correct product page when clicked', () => {
    const product = {
        id: '-ed429aa9-e815-5d1b-966d-403fc8177fac',
        name: 'Rexona Men Antitranspirante Roll On Invisible 50ml',
        category: {
            name: 'Roll On',
        },
        images: [
            {
                asset: {
                    url: 'https://cdn.sanity.io/images/27438tds/rexona-staging-ar/2d63d02809567b152afc3d57b091797f3b62c05c-5000x5000.tif?w=386&h=386&q=80&auto=format',
                },
            },
        ],
        shortDescription: 'Decile chau a las manchas blancas con Rexona Invisible.',
    } as ProductEntity;

    const { container } = render(
        <MemoryRouter>
            <ProductSelected product={product} productDetail={true} />
        </MemoryRouter>
    );

    const productLink = screen.getByText(/Rexona Men Antitranspirante Roll On Invisible 50ml/i);

    expect(productLink).toBeInTheDocument();

    fireEvent.click(productLink);

    expect(container.querySelector('a')).toHaveAttribute('href', `/product/${product.id}`);
});
