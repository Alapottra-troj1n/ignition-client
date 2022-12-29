import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import CancelProduct from './CancelProduct';

const ManageProducts = () => {
    const [user, loading, error] = useAuthState(auth);
    const [allProducts, setAllProducts] = useState([]);
    const navigate = useNavigate();
    const [deletedProduct, setDeletedProduct] = useState(null);

    useEffect(() => {

        const fetchProducts = async () => {

            const settings = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                },

            }
            if (user.email) {
                const response = await fetch(` https://ignition-backend.onrender.com/allproducts?email=${user?.email}`, settings);
                if (response.status === 401 || response.status === 403) {
                    navigate('/')
                }
                const data = await response.json();
                setAllProducts(data)

            }







        }
        fetchProducts()





    }, [deletedProduct])


    const handleProductDelete = (product) => {

        setDeletedProduct(product);






    }   






    return (
        <div>
            {deletedProduct && <CancelProduct product={deletedProduct} setDeletedProduct={setDeletedProduct}  /> }
            <h2 className="text-3xl text-center font-bold">Manage Products : {allProducts?.length}</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table  table-compact table-auto table-zebra w-full">
                       
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((product,index) => 
                                   <tr key={product._id}>
                                   <th>{index + 1}</th>
                                   <td>{product?.name}</td>
                                   <td><label htmlFor="cancel-product-modal" onClick={()=> handleProductDelete(product) } className="btn modal-btn bg-slate-600 text-white">Delete</label></td>
                                 
                               </tr>)}
                       
                         
                         
                    
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageProducts;