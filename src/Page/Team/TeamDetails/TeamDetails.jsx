/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Container from '../../Shared/Container/Container';
import { FaFacebookSquare, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';
import { MdEmail } from 'react-icons/md';

const TeamDetails = () => {
    const teamdetails = useLoaderData();
    const {name, selfDescription, specialist, degree, educationalBackground, experienceAndSkills, phone, registrationNumber, image, email, facebook, instagram, twitter} = teamdetails;
    return (
        <div>
             <HelmetProvider>
                <Helmet><title>Sign In | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading='Team Details' subHeading='Team Details' />
            <Container>
                <div className='py-10 sm:flex flex-row'>
                    <div className='sm:w-[75%] w-auto'>
                        <div className='sm:flex flex-row sm:mx-0 mx-auto gap-10 '>
                            <img src={image} alt="" className='sm:pb-0 pb-5 sm:w-96 w-auto' />
                            <div className='border sm:w-5/12 w-auto space-y-3 border-gray-100 p-8'>
                                <p className='text-lg font-mono'>{specialist} Specialist</p>
                                <h1 className='text-2xl font-semibold'>{name}</h1>
                                <p>{selfDescription}</p>
                                <p className='text-base font-semibold'>{degree}</p>
                                <p>{educationalBackground}</p>
                                <p>Call: {phone}</p>
                                <p>Reg: {registrationNumber}</p>
                                <p className='flex items-center gap-2'><MdEmail className='text-xl'/>{email}</p>
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
                            </div>
                        </div>
                        <div className='py-10 sm:w-7/12 w-auto'>
                            <div className='border border-slate-100 p-6'>
                                <h1 className='py-2 text-xl font-semibold'>More About {name}</h1>
                                <p>{experienceAndSkills} ...</p>
                            </div>
                        </div>
                    </div>
                    <div className='sm:px-0 px-5'>
                        <div>
                            <div className="flex flex-col p-6 rounded-md sm:p-10 bg-gradient-to-t  from-[#8fa4c0ce] to-[#2d535154] text-gray-900">
                                <div className="mb-8 text-center">
                                    <h1 className="my-3 text-2xl font-bold">Make An Appointment</h1>
                                </div>
                                <form action="" className="space-y-8">
                                    <div className="space-y-4">
                                        <div>
                                            <input type="email" name="name" id="email" placeholder="Enter Your Full Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                        </div>
                                        <div>
                                            <input type="email" name="email" id="email" placeholder="Enter Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100" />
                                        </div>
                                        <div>
                                            <div className="mb-4 w-full">
                                                <select
                                                    id="time"
                                                    name="time"
                                                    className="mt-1 text-gray-900 p-2 w-full border rounded-md"
                                                >
                                                    <option>Select Time</option>
                                                    <option>10:00 - 11:00 AM</option>
                                                    <option>11:10 - 11:59 AM</option>
                                                    <option>2:00 - 3:00 PM</option>
                                                    {/* Add more departments as needed */}
                                                </select>
                                            </div>
                                            <div className="mb-4 w-full"> 
                                                <input type="date"  className="mt-1 text-gray-900 p-2 w-full border rounded-md" name="" id="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div>
                                            <button type="button"className="btn btn-wide font-semibold text-base bg-gradient-to-bl from-[#6baa92] to-[#27258555] rounded-md">Appoinment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className='space-y-4 border p-4 mt-5'>
                                <h1 className='border-b border-sky-500 text-xl font-bold py-2'>Opening Time</h1>
                                <div className='flex justify-between border-b'>
                                    <p>Friday - Saturday</p>
                                    <p>10.30 am - 4.00 pm</p>
                                </div>
                                <div className='flex justify-between border-b'>
                                <p>Sunday - Monday</p>
                                <p>11.30 am - 3.00 pm</p>
                                </div>
                                <div className='flex justify-between border-b'>
                                    <p>Tuesday</p>
                                    <p>Closed</p>
                                </div>
                                <div className='flex justify-between border-b'>
                                    <p>Wednesday</p>
                                    <p>8.30 am - 5.00 pm</p>
                                </div>
                                <div className='flex justify-between'>
                                    <p>Thursday</p>
                                    <p>11.30 am - 5.00 pm</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default TeamDetails;