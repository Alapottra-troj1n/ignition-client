import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const ManageProducts = () => {
    const [user, loading, error] = useAuthState(auth);
    const [allProducts, setAllProducts] = useState([]);
    const navigate = useNavigate();

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
                const response = await fetch(`http://localhost:5000/allproducts?email=${user?.email}`, settings);
                if (response.status === 401 || response.status === 403) {
                    navigate('/')
                }
                const data = await response.json();
                setAllProducts(data)

            }







        }
        fetchProducts()





    }, [])






    return (
        <div>
            <h2 className="text-3xl text-center font-bold">Manage Products : {allProducts?.length}</h2>

            <div>
                <div class="overflow-x-auto">
                    <table class="table  table-compact table-auto table-zebra w-full">
                       
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Action</th>
                             
                            </tr>
                        </thead>
                        <tbody>
                            {allProducts.map((product,index) => 
                                   <tr>
                                   <th>{index + 1}</th>
                                   <td>{product?.name}</td>
                                   <td><button class="btn bg-slate-600 text-white">Delete</button></td>
                                 
                               </tr>)}
                       
                         
                         
                    
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default ManageProducts;