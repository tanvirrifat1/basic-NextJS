import { useRouter } from 'next/router';
import React from 'react';

const ProductDetails = () => {

    const router = useRouter()

    return (
        <div>
            <h1>this is products dynamic page:{ router.query.productId }</h1>
        </div>
    );
};

export default ProductDetails