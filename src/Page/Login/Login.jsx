/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {signIn, handleGoogleLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            Swal.fire({
            position: 'top-center',
            icon: 'success',
            title: 'Login Succssfully done',
            showConfirmButton: false,
            timer: 1500
        })
            form.reset()
            navigate(from, {replace:true})

        })
    }
    const GoogleLogin = () => {
        handleGoogleLogin()
          .then(() => {
            // Google login successful
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Login Succssfully done',
              showConfirmButton: false,
              timer: 1500
            });
          })
          .catch((error) => {
            console.error("Google login error:", error.message);
          });
      };
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Sign In | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Sign In' subHeading='Sign In' />
            <div className='py-20'>
            <div className="flex mx-auto flex-col sm:max-w-md max-w-sm p-6 rounded-md sm:p-10 bg-gradient-to-t from-[#8fa4c0ce] to-[#2d535154] text-gray-900">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-base ">Sign in to access your account</p>
                </div>
                <form  onSubmit={handleLogin} action="" className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label  className="block mb-2 text-sm">Email address</label>
                            <input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline ">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md " />
                        </div>
                    </div>
                    <div className="space-y-2 mx-auto">
                        <div className='text-center'>
                            <button type='submit' className="btn btn-wide font-semibold text-base bg-gradient-to-bl from-[#6baa92] to-[#27258555] rounded-md">Sign in</button>
                        </div>
                        <div className="flex items-center pt-4 space-x-1">
                            <div className="flex-1 h-px sm:w-16 "></div>
                                <p className="px-3 text-sm">Sign In with social accounts</p>
                            <div className="flex-1 h-px sm:w-16"></div>
                        </div>
                        <div className="flex justify-center space-x-4">
                            <FcGoogle onClick={GoogleLogin} className='text-4xl cursor-pointer animate-spin'/>
                        </div>
                        <p className="text-sm text-center sm:px-6 dark:text-gray-400">Don't have an account? 
                            <Link to='/register'  className="hover:underline dark:text-gray-100"> Sign up</Link>
                        </p>
                    </div>
                </form>
                
            </div>
            </div>
        </div>
    );
};

export default Login;