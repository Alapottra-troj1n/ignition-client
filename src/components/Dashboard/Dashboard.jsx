import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { FaBoxOpen,FaSlack,FaUserAlt } from "react-icons/fa";

const Dashboard = () => {


    return (
        <div className="container mx-auto h-screen">
             
            <div className="grid grid-cols-1 lg:grid-cols-[30%,70%] mt-14">
              
                <div>
                    <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                        <li>
                            <Link to=''>
                                <FaBoxOpen className="text-2xl"/>
                                My Orders
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/addreview'>
                                <FaSlack className="text-2xl"/>
                                Add a Review
                            </Link>
                        </li>
                        <li>
                            <Link to='/dashboard/myprofile'>
                               <FaUserAlt className="text-2xl"/>
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