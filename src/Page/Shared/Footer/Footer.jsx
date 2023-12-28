import React from 'react';
import Container from '../Container/Container';
import logo from '../../../assets/logo/logo.png'
import { Link } from 'react-router-dom';
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdCall } from "react-icons/md";

const Footer = () => {
    return (
        <div className='bg-gradient-to-r from-[#e5edf1] to-[#dff1df]'>
            <Container>
                <footer className="px-4 divide-y divide-slate-400  pt-20">
                    <div className="flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                        <div className="lg:w-1/3">
                            <Link to="/" className="flex justify-center space-x-3 lg:justify-start">
                                <div className="flex items-center justify-center w-32 h-32 rounded-full ">
                                    <img  src={logo} alt="" />
                                </div>
                                <span className="self-center sm:text-3xl text-2xl font-semibold">OneCare</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                            <div className="space-y-3">
                                <h3 className="tracki text-lg   font-bold">Company</h3>
                                <ul className="space-y-1 text-base">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="aboutus">About Us</Link>
                                    </li>
                                    <li>
                                        <Link to="service">Our Service</Link>
                                    </li>
                                    <li>
                                        <Link to="team">Our Team</Link>
                                    </li>
                                    <li>
                                        <Link to="contact">Contact Us</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                            <h3 className="tracki text-lg font-bold">Important</h3>
                                <ul className="space-y-1 text-base">
                                    <li>
                                        <Link to="">Our Process</Link>
                                    </li>
                                    <li>
                                        <Link to="">Faq</Link>
                                    </li>
                                    <li>
                                        <Link to="">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link to="">Appointment</Link>
                                    </li>
                                    <li>
                                        <Link to="">Terms & Conditions</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                            <h3 className="tracki text-lg font-bold">Quick Link</h3>
                                <ul className="space-y-1 text-base">
                                    <li>
                                        <Link to="">Pricing Plan</Link>
                                    </li>
                                    <li>
                                        <Link to="">Sign In</Link>
                                    </li>
                                    <li>
                                        <Link to="">Subscribe</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="space-y-3">
                                <div className="text-lg font-bold">Official Info</div>
                                    <div className="flex justify-start text-2xl space-x-3">
                                        <Link to="" title="Facebook" className="flex items-center p-1">
                                            <FaFacebookSquare/>
                                        </Link>
                                        <Link to="" title="Twitter" className="flex items-center p-1">
                                            <RiInstagramFill/>
                                        </Link>
                                        <Link to="" title="Instagram" className="flex items-center p-1">
                                            <FaTwitter/>
                                        </Link>
                                    </div>
                                    <div className=''>
                                        <p className='flex items-center gap-2 py-1'><FaMapLocationDot className='text-2xl'/><span className='text-base  font-normal'>2656 food place Street, NY 2200, USA</span></p>
                                        <p className='flex items-center gap-2'><MdCall className='text-2xl'/> <span className='text-base font-normal'>+880 1792 344369</span></p>
                                        <p className='flex items-center py-2 gap-2 w-auto'><IoMail className='text-2xl'/><span className='text-base font-normal'>support@gmail.com</span></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="py-6 text-sm text-center">Copyright © 2023 All Rights Reserved By Mohammad Ali</div>
                </footer>
            </Container>
        </div>
    );
};

export default Footer;