import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const result = await fetch(`http://localhost:5000/products`)
            const data = await result.json();
            console.log(data);
            setProducts(data);
        }
        getProducts(products);
    }, [])



    return (
        <div className="my-24">
            <h2 className="text-4xl text-center font-bold mb-16">OUR HARDWARE <span className="text-primary">PRODUCTS</span></h2>
            <div className="grid grid-cols-3 gap-10 container mx-auto">
                {products.map(product => <Product product={product}></Product>)}
            </div>
        </div>

    );
};

export default Products;