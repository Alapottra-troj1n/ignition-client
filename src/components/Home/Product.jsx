import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const des = product.des.slice(0,50)
    return (
        <div>
            <div className="card bg-base-100 shadow-md hover:shadow-xl transition-all cursor-pointer p-10">
                <figure><img src={product?.image} alt="product" className='h-60' /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {product?.name}
                    </h2>
                    <p>{des}...</p>
                    <div className="card-actions justify-center">
                        <div className="badge badge-outline p-4">Price: {product.price} $</div>
                        <div className="badge badge-outline p-4">Quantity : {product.availableQuantity}p</div>
                        <div className="badge bg-accent text-white p-4"><span className="font-bold"></span> Minimum Order : {product.minimumOrderQuantity}p</div>
                        
                    </div>
                    
                </div>
                <Link to={`purchase/${product._id}`} className="btn btn-primary text-white">Order Now</Link>
            </div>
        </div>
    );
};

export default Product;