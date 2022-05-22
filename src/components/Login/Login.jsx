import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);



    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const handleGoogleLogin = (e) => {
        e.preventDefault();

        signInWithGoogle()
    }

    const onSubmit = data => {

        signInWithEmailAndPassword(data.email, data.password);
    
    };


    if (loading || googleLoading) {
        return <Loading />
    }


    if(user || googleUser) {

        navigate(from, { replace: true });

    }


  

 

    return (
        <div className="h-screen flex justify-center items-center lg:gap-16 flex-wrap">
            <div className="mx-5">
                <img src='https://i.ibb.co/mChTWZY/Login-amico-1.png' className="max-w-sm lg:max-w-lg" alt="" />
            </div>

            <div className="card bg-base-100 shadow-xl mx-5">
                <div className="card-body">
                    <h2 className="text-center text-4xl font-semibold my-5">Login</h2>

                    <form className='flex flex-col gap-3' onSubmit={handleSubmit(onSubmit)}>

                        {/**********Email**********************/}
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

                                {errors.email?.type === 'required' && <span className="label-text-alt">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt">{errors.email.message}</span>}
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
                                {error || googleError ? <p className="text-red-500">{error?.message || googleError?.message}</p> : ""}
                            </label>
                        </div>

                        <input type="submit" value="Login" className="btn btn-primary text-white" />
                        <div>New to Ignition ? <Link className="text-primary" to='/signup'>Create a new account</Link> </div>









                        <div className="divider">OR</div>
                        <button className="btn btn-outline" onClick={handleGoogleLogin}>Sign In With Google</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;