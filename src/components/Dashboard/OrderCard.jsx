import React from 'react';
import { FaTrashAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const OrderCard = ({ order, setCancelledOrder }) => {


    const handleSetCancel = () => {
        setCancelledOrder(order);
    }





    return (
        <div>

            <div className="flex items-center border-2 rounded-md p-4 justify-between">

                <div className="flex items-center justify-between ">
                    <div className="ml-4 md:ml-7">
                        <h2 className="font-medium text-md lg:text-xl w-24 md:w-44 xl:w-56">{order.product}</h2>
                    </div>

                </div>

                <div className=" sm:flex justify-end md:justify-center">
                    <h2 className="font-normal text-xs lg:text-sm w-24 md:w-48 ">Quantity: {order.quantity}</h2>
                </div>

                <div className=" sm:flex justify-end md:justify-center">
                    {order?.paid ? <small>Transaction id : {order.transactionId}</small> : <h2 className="font-normal text-xs lg:text-sm w-24 md:w-48 ">Total Price: {order?.totalPrice} $</h2>}

                </div>

                <div className="ml-2 flex items-center gap-3 flex-col lg:flex-row">
                    {order?.paid ? '' : <label onClick={handleSetCancel} htmlFor='order-delete-confirm' className=" font-bold cursor-pointer mr-3 modal-button"><FaTrashAlt /></label>}
                    {order?.paid ? <p className='text-green-500'>Paid </p> : <Link to={`/payment/${order._id}`} className="btn btn-sm bg-slate-600 text-white">Pay</Link>}

                </div>


            </div>

        </div>
    );
};

export default OrderCard;