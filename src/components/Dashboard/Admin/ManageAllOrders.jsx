import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const ManageAllOrders = () => {
    const [allorders, setAllOrders] = useState([]);
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {

        const fetchOrders = async () => {

            const settings = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                },

            }
            if (user.email) {
                const response = await fetch(`http://localhost:5000/allorders?email=${user?.email}`, settings);
                if (response.status === 401 || response.status == 403) {
                    signOut(auth)
                }
                const data = await response.json();
                setAllOrders(data)

            }






        }
        fetchOrders();



    }, [])


    return (
        <div>
            <h2 className='text-center text-xl mt-10 lg:text-3xl font-bold'>Manage All Orders : {allorders.length}</h2>
            <div className='flex flex-col gap-3 mt-10'>
                <div class="overflow-x-auto">
                    <table class="table table-auto table-zebra w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allorders.map((order,index) => 
                                <tr>
                                <th>{index + 1}</th>
                                <td>{order?.product}</td>
                                <td>{order?.username}</td>
                                <td>{order?.totalPrice}$</td>
                                <td>unpaid</td>
                              
                                
                            </tr>)}
                        </tbody>
                    </table>
                </div>

            </div>


        </div>
    );
};

export default ManageAllOrders;