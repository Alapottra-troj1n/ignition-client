import React from 'react';
import { toast } from 'react-toastify';

const ConfirmDelete = ({order,setCancelledOrder}) => {

    const handleOrderCancel = (e) =>{
        e.preventDefault();
         const deleteOrder = async()=>{

            const settings = {
                method:'DELETE',
                headers: {
                    'content-type': 'application/json',
                }};



            const res = await fetch(` https://tranquil-temple-93556.herokuapp.com/order/${order._id}`,settings);
            const data = await res.json();
            if(data.deletedCount){
                    toast.success('Sucessfully cancelled the order');
                    setCancelledOrder('')

            }
         }
         deleteOrder();

    }


    return (
        <div>
            <input type="checkbox" id="order-delete-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                <label htmlFor="order-delete-confirm" className="btn bg-slate-700 text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are you sure you want to delete this order? </h3>
                    <p className="mt-5 text-lg font-semibold">Product: {order.product}</p>
                    <p>Quantity: {order.quantity}</p>
                    <div className="modal-action">
                        <label onClick={handleOrderCancel} className="btn bg-slate-700 text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;