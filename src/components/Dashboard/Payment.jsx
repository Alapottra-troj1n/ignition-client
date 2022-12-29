import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L3IPiD4WFe5aW8OhV3PtdL87RHc0NYct9J6qzYTfl6O626zTFcWoh3948YOI92A1aY3kzLcgmW29gqW4QQwmVE000ca6tgh78');

const Payment = () => {

    const { id } = useParams()


    const [order, setOrder] = useState('');

    useEffect(() => {

        const fetchOrder = async () => {

            const settings = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            }
            const response = await fetch(` https://ignition-backend.onrender.com/order/payment/${id}`, settings);
            const data = await response.json();
            console.log(data);
            setOrder(data);


        }

        fetchOrder();



    }, [])





    return (
        <div className='pb-40'>
            <div className='my-20'>
                <h2 className="text-center my-2 font-bold text-4xl">CHECKOUT</h2>

            </div>

            <div className='flex flex-col items-center'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Pay for {order?.product}</h2>
                        <p><span className="font-semibold">Price</span> : {order?.totalPrice} $</p>
                        <p><span className="font-semibold">Quantity</span> : {order?.quantity}</p>
                        <div>
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                        <div className="card-actions justify-end">
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;