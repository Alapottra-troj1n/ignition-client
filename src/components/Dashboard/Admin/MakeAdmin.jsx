import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const MakeAdmin = () => {
    const [allUsers, setAllUsers] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {

        const fetchAllUsers = async () => {
            const settings = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`

                },

            }


            if (user?.email) {
                const response = await fetch(`http://localhost:5000/allusers?email=${user.email}`, settings)
                if (response.status === 401 || response.status === 403) {
                    navigate('/')
                }
                const data = await response.json();
                console.log(data);
                setAllUsers(data);

            }




        }
        fetchAllUsers();


    }, [])



    return (
        <div>
            <h2 className="text-3xl text-center my-10 font-bold">Make a Admin</h2>

            <div class="overflow-x-auto">
                <table class="table table-compact table-zebra w-full">
                  
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th className='hidden lg:table-cell'>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     
                     {allUsers.map((user,index) => 
                            
                            <tr>
                               <th>{index + 1}</th>
                               <td>{user.username}</td>
                               <td className='hidden lg:table-cell'>{user.email}</td>
                               <td> <button className='btn btn-sm bg-slate-600 text-white' >Make Admin</button> </td>
                           </tr>
                     )}
                       
                        
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MakeAdmin;