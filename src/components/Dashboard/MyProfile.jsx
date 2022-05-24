import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import { FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [fetchUser] = useUser(user)






    return (
        <div>

            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div>
                    <img src={user?.photoURL || `https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg`} alt="myprofile" className="w-44 rounded-full" />
                    <div className="indicator">
                        <span className="indicator-item badge badge-success">online</span>
                        <h2 className='text-center text-xl my-5'> <span className="font-semibold">Welcome Back,</span> <br /> {user?.displayName}</h2>
                    </div>
                </div>
                <div className="details">
                    <h1 className="text-3xl mb-5 font-bold">USER <span className="text-primary">INFO:</span> </h1>
                    <h2 className=' text-lg font-semibold my-4'>Email : <small>{user?.email}</small> </h2>
                    <h2 className=' text-lg font-semibold my-4'>Education :  { fetchUser?.moreDetails?.education   || <small className="font-normal">needs to be updated</small>}</h2>
                    <h2 className=' text-lg font-semibold my-4'>Location : { fetchUser?.moreDetails?.location|| <small className="font-normal">needs to be updated</small>}</h2>
                    <h2 className=' text-lg font-semibold my-4'>Linkedin : { fetchUser?.moreDetails?.linkedin || <small className="font-normal">needs to be updated</small>}</h2>
                    <div>
                       <Link to='/updateprofile'> <FaUserEdit className="text-3xl text-primary hover:text-red-700"></FaUserEdit></Link>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default MyProfile;