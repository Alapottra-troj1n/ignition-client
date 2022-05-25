import React from 'react';
import { toast } from 'react-toastify';

const CancelProduct = ({product, setDeletedProduct}) => {
    console.log(product);
    const handleOrderProduct = (e) =>{
        
        e.preventDefault();
         const deleteOrder = async()=>{

            const settings = {
                method:'DELETE',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }};



            const res = await fetch(`http://localhost:5000/product/${product._id}`,settings);
            const data = await res.json();
            if(data.deletedCount){
                    toast.success('Sucessfully cancelled the order');
                    setDeletedProduct('')

            }
         }
         deleteOrder();

    }



    return (
        <div>
            <input type="checkbox" id="cancel-product-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="cancel-product-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Do you sure you want to delete this product ?</h3>
                    <p className="py-4">{product?.name}</p>
                    <div className="modal-action">
                        <label onClick={handleOrderProduct} className="btn bg-slate-700 text-white">Delete</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelProduct;