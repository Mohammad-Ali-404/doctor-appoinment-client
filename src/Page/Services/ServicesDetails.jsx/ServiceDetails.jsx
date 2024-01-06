/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useAxiosSecure from '../../../Hooks/UserAxiosSecure';
import Container from '../../Shared/Container/Container';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Helmet } from 'react-helmet-async';
import { BsPatchCheck } from 'react-icons/bs';
import { FaCircleCheck,FaHeadset } from "react-icons/fa6";
import serviceAnimation from '../../../../public/service-animation.json';
import Lottie from 'lottie-react';
const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    // const {} = serviceDetails;
    const [pricing, setPricing] = useState([])
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        const fetchData = async () => {
          try {
            // Replace the URL with your actual API endpoint
            const response = await axiosSecure.get('http://localhost:5000/pricing');
            setPricing(response.data); // Assuming your API returns an array of pricing data
          } catch (error) {
            console.error('Error fetching pricing data:', error);
          }
        };
        fetchData();
      }, [axiosSecure]);
    
// Todo
    return (
        <div className=''>
            <Helmet><title>Service Details | One Care</title></Helmet>
            <PageTitle heading='Service Details' subHeading='Service Details' />
            <div className='sm:py-16 py-10'>
                <Container>
                    <div className='sm:flex flex-row gap-7'>
                        <div className='sm:w-4/12 w-full'>
                        <div className='hidden xl:block'>
                            <Lottie className='-mt-8' style={{width:'300px'}} animationData={serviceAnimation}/>
                        </div>
                            <div className="grid max-w-mb grid-cols-1 gap-6 mx-auto auto-rows-fr pb-5">
                                {
                                    pricing.slice(1, 2).map(plan => (
                                        <div key={plan._id}>
                                            <div className="relative z-0 flex flex-col items-center p-6 border rounded-md">
                                                <span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-violet-400 dark:text-gray-900">{plan.name}</span>
                                                <p className="my-6 text-4xl font-bold dark:text-violet-400">{plan.monthly_price}</p>
                                                <ul className="flex-1 space-y-2">
                                                    <div className="px-4 py-4">
                                                        <div className="font-bold text-xl mb-2">Services Included</div>
                                                        <ul className="text-gray-700 text-base space-y-3">
                                                            {plan.services_included.map((service, index) => (
                                                                <li key={index} className="mb-1 flex gap-1">
                                                                    <BsPatchCheck className='text-xl text-blue-600'/>
                                                                    {service}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </ul>
                                                <ul className="flex-1 space-y-2">
                                                    <div className="px-4 py-4">
                                                        <div className="font-bold text-xl mb-2">Features</div>
                                                        <ul className="text-gray-700 text-base space-y-3">
                                                        {plan.features.map((feature, index) => (
                                                            <li key={index} className="mb-1 flex gap-1">
                                                            <BsPatchCheck className='text-xl text-blue-600'/>
                                                            {feature}
                                                            </li>
                                                        ))}
                                                        </ul>
                                                    </div>
                                                </ul>

                                                <button className="px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 dark:border-violet-400">Subscribe Now</button>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className='border border-slate-100'>
                                <div className='py-10 sm:mx-auto mx-0 px-5'>
                                    <div className='flex items-center gap-5'>
                                        <FaHeadset className='sm:text-6xl text-2xl'/>
                                        <div>
                                            <h1 className='sm:text-3xl text-xl font-serif'>Emergency Cases</h1>
                                            <a href="tel:" className='text-lg py-2'>+880 1792-344369</a>
                                        </div>
                                    </div>
                                    <p className='py-4'>Welcome to OneCare! We value your feedback, inquiries, and suggestions. Our dedicated team is here to assist you in any way we can. Please feel free to reach out to us using the contact information.</p>
                                    <Link to='/contact'><button className="self-center px-8 py-3 font-semibold text-white hover:bg-[#3b8d5d]  rounded-full shadow bg-[#5d98db] transition-colors duration-700 hover:border-[#5996dd] border-gray-400 border mr-4">Contact Us</button></Link>
                                </div>
                            </div>
                        </div>
                        <div className='sm:w-8/12 w-full'>
                                <div className="">
                                    {/* Display Cardiology Service Details */}
                                    <div className='space-y-4'>
                                        <img src={serviceDetails.image} alt={serviceDetails.title} className="mb-4 sm:w-5/6 rounded-lg" />
                                        <h2 className="text-3xl font-bold mb-2">{serviceDetails.title}</h2>
                                        <p className="text-gray-600 mb-4">{serviceDetails.details}</p>
                                        <p className="text-gray-700 py-4">{serviceDetails.additional_description}</p>
                                    </div>

                                    {/* Display Cardiology Service Capabilities */}
                                    <div className='space-y-5'>
                                        <ul className="list-disc pl-6 space-y-2">
                                            {serviceDetails.main_points.map((point, index) => (
                                                
                                                <li key={index} className="mb-2 flex gap-2 items-center"> <FaCircleCheck className='text-xl text-blue-500'/>{point}</li>
                                            ))}
                                        </ul>
                                        <h3 className="text-2xl font-bold gap-6 space-y-5 mb-2">Capabilities</h3>
                                        <p className="text-gray-700 mt-4">{serviceDetails.capabilities_details}</p>
                                    </div>

                                    {/* Display Cardiology Service Images */}
                                    <div>
                                        <div className="grid grid-cols-3 gap-4 py-10">
                                            {serviceDetails.images.map((image, index) => (
                                                <img key={index} src={image} alt={`Cardiology Image ${index + 1}`} className="rounded-lg" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default ServiceDetails;