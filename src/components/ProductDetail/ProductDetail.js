import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';

const ProductDetail = () => {
    const {productKey} = useParams();
    const [product, setProduct] = useState({});
    //const product = fakeData.find(pd => pd.key === productKey);

    useEffect(() =>{
        fetch('https://enigmatic-shelf-22607.herokuapp.com/products/' + productKey)
        .then(res => res.json())
        .then(data => setProduct(data));
    },[productKey])
    
    return (
        <div>
            <h1>Your Product Details.</h1>
            <Product showAddToCart={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;