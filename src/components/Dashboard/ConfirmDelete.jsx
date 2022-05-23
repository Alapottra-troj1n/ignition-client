import React from 'react';

const ConfirmDelete = ({order}) => {
    return (
        <div>
            <input type="checkbox" id="order-delete-confirm" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box relative">
                <label for="order-delete-confirm" class="btn bg-slate-700 text-white btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are you sure you want to delete this order? </h3>
                    <p className="mt-5 text-lg font-semibold">Product: {order.product}</p>
                    <p>Quantity: {order.quantity}</p>
                    <div className="modal-action">
                        <label for='order-delete-confirm' class="btn bg-slate-700 text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDelete;