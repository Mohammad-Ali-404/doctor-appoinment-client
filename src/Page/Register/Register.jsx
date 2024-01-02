/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {register, handleSubmit, reset,  formState: { errors },} = useForm()
    const {createUser, updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const onSubmit = (data) =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoURL)
            .then(() =>{
                console.log('User profile updated');
                reset()
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'User Created Succssfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                navigate('/')
            })
            .catch(error => console.log(error))
        })
    }
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Sign Up | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Sign Up' subHeading='Sign Up' />
            <div className='py-20'>
                <div className="flex mx-auto flex-col sm:max-w-md max-w-sm p-6 rounded-md sm:p-10 bg-gradient-to-t from-[#8fa4c0ce] to-[#2d535154] text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up Now</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="space-y-12">
                        <div className="space-y-4">
                            <div>
                                <label  className="block mb-2 text-sm">Enter Your Full Name</label>
                                <input type="name" {...register("name", { required: true })} name="name" id="name" placeholder="David Smith" className="w-full px-3 py-2 border rounded-md " />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm">Upload Your Photo Url</label>
                                <input type="photo" name="photo" {...register("photoURL")} id="photo" placeholder="Photo url" className="w-full px-3 py-2 border rounded-md " />
                            </div>
                            <div>
                                <label  className="block mb-2 text-sm">Email address</label>
                                <input type="email" name="email" id="email" {...register("email", { required: true })} placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
                            </div>
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-sm">Password</label>
                                </div>
                                <input type="password" name="password" {...register("password")} id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                            </div>
                        </div>
                        <div className="space-y-2 mx-auto">
                            <div className='text-center'>
                                <button type='submit' className="btn btn-wide font-semibold text-base bg-gradient-to-bl from-[#6baa92] to-[#27258555] rounded-md">Sign Up</button>
                            </div>
                        </div>
                        <p className="text-sm text-center sm:px-6 dark:text-gray-400">If you already have an account You can 
                            <Link to='/login'  className="hover:underline dark:text-gray-100"> Sign In</Link>
                        </p>
                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;