interface ProductEntity {
    name: string;
    shortDescription: string;
    id: string;
    images: {
        alt: string;
        asset: {
            url: string;
        };
    }[];
    category: {
        _id: string;
        name: string;
    };
}

export default ProductEntity;