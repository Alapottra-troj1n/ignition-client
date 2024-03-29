import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const PurchasePage = () => {
    const productId = useParams();
    const [user, loading, error] = useAuthState(auth);
   

    const { data: product, isLoading, refetch } = useQuery('product', () => fetch(` https://ignition-backend.onrender.com/product/${productId.id}`, {
    })
    .then(res => res.json()));

    const [totalPrice, setTotalPrice] = useState(product?.price * product?.minimumOrderQuantity);


    const [orderQuantity, setOrderQuantity] = useState(product?.minimumOrderQuantity);



    if (isLoading || !product) {
        return <Loading />
    }

    if(orderQuantity < product.minimumOrderQuantity || !orderQuantity ){
        setOrderQuantity(product?.minimumOrderQuantity);
    }

    const handleQuantityPlus = (e) =>{
        e.preventDefault();
        const initialQuantity = product.minimumOrderQuantity;
        const updatedQuantity = orderQuantity + initialQuantity;
        

        setOrderQuantity(updatedQuantity);
        setTotalPrice(updatedQuantity * product?.price);

    }


    const handleQuantityMinus = (e) =>{
        e.preventDefault();
        const initialQuantity = product.minimumOrderQuantity;

        const updatedQuantity = orderQuantity - initialQuantity;

        setOrderQuantity(updatedQuantity);
        setTotalPrice(updatedQuantity * product?.price);
    }


    const handleOrder = (e) =>{
        e.preventDefault();
        const order = {
            product: product.name,
            email : e.target.email.value,
            username : e.target.username.value,
            address : e.target.address.value,
            phone: e.target.phone.value,
            quantity: e.target.quantity.value,
            totalPrice
        }

        const placeOrder = async()=>{
           

            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(order)
            };

            const res = await fetch(` https://ignition-backend.onrender.com/addorder`, settings);
            const data = await res.json();
            if(data.insertedId){
                    toast.success('Your Order Has Been Booked. Please Check My Orders Page');
                    refetch();
            }

        }

        placeOrder();
    }




    return (
        <div className='my-14 container mx-auto'>
            <div>
                <h2 className="text-center text-4xl font-bold">{product.name}</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mb-10 items-center'>
                <div className='flex justify-center'>
                <img src={product.image} alt="" className="max-w-xs lg:max-w-md" />
                </div>
                <div>
                    <h2 className="text-center text-2xl font-bold text-primary">Order Details</h2>
                    <form onSubmit={handleOrder} className="flex flex-col gap-2 justify-center items-center">

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input type="text" name='email' value={user?.email} disabled className="input input-bordered w-80" />
                        </div>
                        
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Username</span>
                            </label>
                            <input type="text" name='username' value={user?.displayName} disabled className="input input-bordered w-80" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Address</span>
                            </label>
                            <input type="text" name='address' required  className="input input-bordered w-80" />
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Phone Number</span>
                            </label>
                            <input type="text" name='phone' required  className="input input-bordered w-80" />
                        </div>
                      

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text font-semibold">Quantity (min : {product?.minimumOrderQuantity}) (max : {product?.availableQuantity})</span>
                            </label>
                            <input type="number" name='quantity' value={orderQuantity} disabled  className="input input-bordered w-80" />
                            <div className="flex gap-2 mt-2">
                                <button onClick={handleQuantityPlus} disabled={orderQuantity === product?.availableQuantity ? true : ''} className="btn btn-primary btn-xs">+</button>
                                <button onClick={handleQuantityMinus} disabled={orderQuantity === product?.minimumOrderQuantity || orderQuantity < product?.minimumOrderQuantity  ? true : ''} className="btn btn-primary btn-xs">-</button>
                            </div>
                        </div>

                        <div className="form-control w-full max-w-xs my-5">
                            <small className="font-semibold text-slate-500" >Price per unit : {product?.price} $</small>
                           <h2 className="text-2xl font-bold">Total Price : {totalPrice || product?.price * product?.minimumOrderQuantity} $ </h2>
                        </div>

                        
                        <input type="submit" disabled={product?.maximumOrderQuantity === 0 ? true : ''} value="Place The Order"  className='btn btn-primary text-white' />

                    </form>
                </div>
            </div>
            <div className="font-medium text-lg">
                {product.des}
            </div>




        </div>
    );
};

export default PurchasePage;