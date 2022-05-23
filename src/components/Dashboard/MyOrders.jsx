import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
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
                const response = await fetch(`http://localhost:5000/myorders?email=${user.email}`,settings);
                if(response.status === 401 || response.status === 403){
                    signOut(auth);

                }else{
                    const data = await response.json();
                    setMyOrders(data);
                }

            }

            
        }
        fetchMyOrders();




    },[])


    return (
        <div>
            <h2 className='text-center font-bold text-2xl'>My Orders : {myOrders.length}</h2>
            <div className="flex justify-center flex-col gap-5 my-5">
            {myOrders.map(order => <OrderCard order={order} />)}
            </div>
        </div>
    );
};

export default MyOrders;