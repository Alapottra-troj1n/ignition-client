import React from 'react';

const Product = ({product}) => {
    const des = product.des.slice(0,50)
    return (
        <div>
            <div class="card bg-base-100 shadow-md hover:shadow-xl transition-all cursor-pointer p-10">
                <figure><img src={product?.image} alt="product" className='h-60' /></figure>
                <div class="card-body">
                    <h2 class="card-title">
                        {product?.name}
                    </h2>
                    <p>{des}...</p>
                    <div class="card-actions justify-center">
                        <div class="badge badge-outline p-4">Price: {product.price} $</div>
                        <div class="badge badge-outline p-4">Quantity : {product.availableQuantity}p</div>
                        <div class="badge bg-accent text-white p-4"><span className="font-bold"></span> Minimum Order : {product.minimumOrderQuantity}p</div>
                        
                    </div>
                    
                </div>
                <button className="btn btn-primary text-white">Order Now</button>
            </div>
        </div>
    );
};

export default Product;