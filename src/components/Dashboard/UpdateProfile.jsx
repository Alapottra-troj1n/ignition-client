import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useUser from '../../hooks/useUser';
import Loading from '../Loading/Loading'

const UpdateProfile = () => {
    const [user, loading, error] = useAuthState(auth);

    const [fetchedUser] = useUser(user);
    const navigate = useNavigate();

    const handleProfileUpdate = (e) => {
        e.preventDefault();

            const updateProfile = async() =>{

                const updatedUser = {

                        education : e.target.education.value,
                        location : e.target.location.value,
                        linkedin : e.target.linkedin.value

                } 
                const settings = {
                    method:'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(updatedUser)
                }

                const response = await fetch(` https://tranquil-temple-93556.herokuapp.com/updateprofile?email=${user.email}`,settings);
                const data = await response.json();
                if(data.modifiedCount){
                    toast.success('Profile Updated Successfully');
                    navigate('/dashboard/myprofile')
                }


            }
            updateProfile();
            

    }
    if(loading){
        <Loading/>
    }


    return (
        <div>
            <div className="h-screen container mx-auto">
                <h2 className="text-3xl text-center font-bold mt-16 mb-10">Update Profile</h2>

                <form className="flex flex-col items-center" onSubmit={handleProfileUpdate}>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Name</span>
                    </label>
                    <input type="text" name='name' disabled defaultValue={fetchedUser?.username} required className="input input-bordered w-80" />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Email</span>
                    </label>
                    <input type="text" name='email' disabled defaultValue={fetchedUser?.email} required className="input input-bordered w-80" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Education</span>
                    </label>
                    <input type="text" name='education' required placeholder="Enter your new education details" className="input input-bordered w-80" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Location</span>
                    </label>
                    <input type="text" name='location' required placeholder="Enter your new location details" className="input input-bordered w-80" />
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text font-semibold">Linkedin Profile</span>
                    </label>
                    <input type="text" name='linkedin' required placeholder="Enter your new location details" className="input input-bordered w-80" />
                </div>
               <input type="submit" value="UPDATE PROFILE" className='btn mt-5 bg-slate-600 text-white' />


                </form>


            </div>
            
        </div>
    );
};

export default UpdateProfile;