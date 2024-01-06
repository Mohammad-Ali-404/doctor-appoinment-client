import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';
import logo from '../../../assets/logo/logo.png'
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FcFaq } from "react-icons/fc";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AuthContext } from '../../../Providers/AuthProvider';
import ProfileDropdown from '../../../components/ProfileDropdown/ProfileDropdown';

const Navbar = () => {
    const {user} = useContext(AuthContext)
    
    const navbar = 
        <>
            <Link to='/'><li><a>Home</a></li></Link>
            <Link to='about'><li><a>About Us</a></li></Link>
            <Link to='team'><li><a>Team</a></li></Link>
            <Link to='service'><li><a>Service</a></li></Link>
            <Link to='pricing'><li><a>Pricing</a></li></Link>
            <Link to='contact'><li><a>Contact</a></li></Link>
            <Link to='blog'><li><a>Blog</a></li></Link>
        </>
    return (
        <div>
           <div className='bg-[#92beff]'>
            <Container>
                    <div className=' p-4 hidden lg:flex lg:justify-between sm:col-auto '>
                        <div className='flex flex-col md:flex-row text-black text-base font-normal'>
                            <Link type='email'><h1 className='border-r-2 border-black px-2 flex duration-300'><AiOutlineMail className='mt-1 text-xl mr-1'/>onecaresupport@gmail.com</h1></Link>
                            <Link type='tel'><h1 className='flex border-r-2 border-black px-2 duration-300'> <BsTelephone className='text-xl mt-1'/> +8801792-344369</h1></Link>
                            <Link><h1 className='ml-4 flex duration-300'> <FcFaq className='mt-1 text-xl mr-1'/>Faqs</h1></Link>
                        </div>
                        <div>
                            <Link ><h1 className='px-7 flex duration-300 text-base'><FaMapMarkerAlt className='text-xl mt-1 mr-2'/>2656 food place Street, NY 2200, USA</h1></Link>
                        </div>
                    </div>
                </Container>
           </div>
            <Container>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                        </ul>
                        </div>
                        <Link to='/'><img className='w-32' src={logo} alt="" /></Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                        {navbar}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className="flex items-center gap-4 flex-shrink-0  ">
                            
                            {
                                user ? <>
                                <div className='z-10 inset-0'>
                                        <ProfileDropdown/>
                                    </div>
                                </> : <>
                                    <Link to='login'><button className="self-center px-8 py-3 font-semibold text-white bg-[#3b8d5d]  rounded-full shadow hover:bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border mr-4">SIGN IN</button></Link>
                                </>
                            }           
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Navbar;