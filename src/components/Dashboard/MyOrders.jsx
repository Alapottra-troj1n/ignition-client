import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ConfirmDelete from './ConfirmDelete';
import OrderCard from './OrderCard';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);

    const [myOrders, setMyOrders] = useState([])

    useEffect(() => {
        const fetchMyOrders = async () => {
            const settings = {
                method:'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                },
            }
            if(user?.email){
                const response = await fetch(` https://tranquil-temple-93556.herokuapp.com/myorders?email=${user.email}`,settings);
                if(response.status === 401 || response.status === 403){
                    signOut(auth);

                }else{
                    const data = await response.json();
                    setMyOrders(data);
                }

            }

            
        }
        fetchMyOrders();




    },[myOrders, user.email])

    const [cancelledOrder, setCancelledOrder] = useState(null)

    return (
        <div>
            {cancelledOrder && <ConfirmDelete setCancelledOrder={setCancelledOrder} order={cancelledOrder} />}

            <h2 className='text-center font-bold lg:text-2xl'>My Orders : {myOrders.length}</h2>
            <div className="flex justify-center flex-col gap-5 my-5">
            {myOrders.map(order => <OrderCard setCancelledOrder={setCancelledOrder} key={order._id} order={order} />)}
            </div>
        </div>
    );
};

export default MyOrders;