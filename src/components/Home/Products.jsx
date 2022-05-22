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
        <div className="my-24 container mx-auto">
            <h2 className="text-3xl lg:text-4xl  text-center font-bold mb-16">OUR HARDWARE <span className="text-primary">PRODUCTS</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                {products.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>

    );
};

export default Products;