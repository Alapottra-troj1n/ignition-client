import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {

    const navigate = useNavigate();
    let location = useLocation();
    const [customError, setCustomError] = useState('');
    


    let from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);


      if(loading || updating) {
          return <Loading/>
      }

      



   const onSubmit = async(data) => {
       if(data.password !== data.confirmPassword) {
        setCustomError('Passwords do not match !')
        return;
       }
       
       await createUserWithEmailAndPassword(data.email,data.password);
       await updateProfile({displayName: data.username});
       setCustomError('')


   }
   if(user) {
    navigate(from, { replace: true });
    }




    return (
        <div className="h-screen flex justify-center items-center">
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-4xl font-semibold my-5">Sign Up</h2>

                <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>
                    {/*********** USERNAME ****************/}

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Username</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='text' {...register("username", {
                            required: {
                                value: "true",
                                message: 'Username is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Username must be over 6 characters long'
                            }

                        })} />
                        <label className="label">
                            {errors.username?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.username.message}</span>}
                            {errors.username?.type === 'minLength' && <span className="text-red-500 label-text-alt">{errors.username.message}</span>}
                        </label>
                    </div>






                    {/******************Email**********************/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='email' {...register("email", {
                            required: {
                                value: "true",
                                message: 'Email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Provide a Valid Email Address'
                            }

                        })} />
                        <label className="label">
                            {errors.email?.type === 'required' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="text-red-500 label-text-alt">{errors.email.message}</span>}
                        </label>
                    </div>

                    {/**************** Password *******************/}
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='password' {...register("password", {
                            required: {
                                value: "true",
                                message: 'Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }

                        })} />
                        <label className="label">
                            {errors.password?.type === 'required' && <span className="label-text-alt">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span className="label-text-alt">{errors.password.message}</span>}
                            {error || updateError ? <p className="text-red-500">{error?.message || updateError?.message}</p> : ""}
                        </label>
                        </div>

                        


                        <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input className="input input-bordered w-full max-w-xs" type='password' {...register("confirmPassword", {
                            required: {
                                value: "true",
                                message: 'Confirm Password is required'
                            },
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }

                        })} />
                        <label className="label">
                            {errors.confirmPassword?.type === 'required' && <span className="label-text-alt">{errors.confirmPassword.message}</span>}
                            {errors.confirmPassword?.type === 'minLength' && <span className="label-text-alt">{errors.confirmPassword.message}</span>}
                            {error || updateError ? <p className="text-red-500">{error?.message || updateError?.message}</p> : ""}
                            {customError && <p className="text-red-500">{customError}</p>}
                        </label>
                        </div>




                    <input type="submit" value="Register" className="btn btn-primary text-white" />
                    <div>Already a member ? <Link className="text-primary"to='/login'>Login</Link> </div>










                </form>

            </div>
        </div>
    </div>
    );
};

export default SignUp;