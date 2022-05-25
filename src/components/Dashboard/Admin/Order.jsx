import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Order = ({order,index,setCancelledOrder}) => {
    const [pending, setPending] = useState(true);


    const handlePending = () => {
        setPending(!pending);
        }


    const handleOrderCancel = () =>{

        setCancelledOrder(order);

    }    


    return (
      
            <tr>
                <th>{index + 1}</th>
                <td>{order?.product}</td>
                <td>{order?.username}</td>
                <td>{order?.totalPrice}$</td>
                {order?.paid ? <td className="text-green-500" >paid</td> : <td className="text-red-400">unpaid</td>}
                {order?.paid && <button onClick={handlePending} className='btn mt-5 bg-slate-700 btn-xs text-white' >{pending ? 'pending' : 'shipped'}</button>}
                {order?.paid ? '' : <label onClick={handleOrderCancel} htmlFor='order-delete-confirm' className=" font-bold cursor-pointer mr-3 mt-5 modal-button btn bg-slate-700 btn-xs"> cancel order</label> }
            </tr>
     
    );
};

export default Order;