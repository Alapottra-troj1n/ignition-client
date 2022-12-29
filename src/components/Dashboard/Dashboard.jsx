import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBoxOpen, FaSlack,FaUserSecret, FaUserAlt,FaBoxes } from "react-icons/fa";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';

const Dashboard = () => {

    const [user, loading, error] = useAuthState(auth);
    const [fetchedUser] = useUser(user);

    const isAdmin = fetchedUser?.isAdmin;


    return (
        <div className="container mx-auto mb-40">

            <div className="grid grid-cols-1 lg:grid-cols-[30%,70%] mt-14">

                <div>
                    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                        {!isAdmin ?
                            // not admin routes
                            
                            <>

                                <li>
                                    <Link to=''>
                                        <FaBoxOpen className="text-2xl" />
                                        My Orders
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/dashboard/addreview'>
                                        <FaSlack className="text-2xl" />
                                        Add a Review
                                    </Link>
                                </li>


                            </>
                          

                            :

                            // admin routes

                            <>
                            
                            <li>
                                <Link to=''>
                                    
                                        <FaSlack className="text-xl" />
                                        Manage All Orders
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/addaproduct'>
                                    
                                        <FaBoxOpen className="text-xl" />
                                        Add A Product
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/makeadmin'>
                                    
                                        <FaUserSecret className="text-xl" />
                                        Make Admin
                                </Link>
                            </li>

                            <li>
                                <Link to='/dashboard/manageproducts'>
                                    
                                        <FaBoxes className="text-xl" />
                                        Manage Products
                                </Link>
                            </li>

                            </>

                        }
                        <li>
                            <Link to='/dashboard/myprofile'>
                                <FaUserAlt className="text-2xl" />
                                My Profile
                            </Link>
                        </li>
                    </ul>

                </div>

                <div>
                    <Outlet />
                </div>

            </div>

        </div>
    );
};

export default Dashboard;