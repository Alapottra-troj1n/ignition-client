import React from 'react';
import {FaTrashAlt} from "react-icons/fa";

const OrderCard = ({order}) => {
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

            <div className=" sm:flex justify-end md:justify-center hidden">
                <h2 className="font-normal text-xs lg:text-sm w-24 md:w-48 ">{order.address}</h2>
            </div>

            <div className="ml-2 flex flex-col lg:flex-row">
                <button className="mx-3 mb-2 lg:mb-0"><FaTrashAlt className="lg:text-lg text-red-500 hover:text-red-600"/></button>
                <button className="btn btn-sm bg-slate-600 text-white">Pay</button>
            </div>


        </div>

    </div>
    );
};

export default OrderCard;