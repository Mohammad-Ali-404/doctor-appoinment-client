import React, { useEffect, useState } from 'react';
import Container from '../Shared/Container/Container';
import useAxiosSecure from '../../Hooks/UserAxiosSecure';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { BsPatchCheck } from "react-icons/bs";

const Pricing = () => {
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
    
    return (
        <div>
            <Helmet><title>Pricing | One Care</title></Helmet>
                <PageTitle heading='Pricing' subHeading='Pricing' />
            <Container>
            <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
                <div className="container mx-auto p-4 sm:p-10">
                    <div className="mb-16 space-y-4 text-center">
                        <h1 className="text-2xl font-semibold text-blue-500">| Pricing</h1>
                        <p className="sm:text-3xl font-bold">Select A Plan For You</p>
                        <div>
                            <button className="px-4 py-1 font-semibold border rounded-l-lg dark:bg-violet-400 dark:border-violet-400 dark:text-gray-900">Monthly</button>
                            
                        </div>
                    </div>
                    <div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
                        {
                            pricing.map(plan => (
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
                </div>
            </section>
            <div className='text-center pb-10'>
                <h1 className='sm:text-3xl text-xl font-bold pb-2'>Additional Notes:</h1>
                <div className='space-y-3'>
                    <p>All plans can be billed annually with a discount.</p>
                    <p>Payment options include credit cards, digital wallets, and insurance coverage where applicable.</p>
                    <p>Customization options for add-on services, such as teletherapy or fitness programs, can be available for an extra fee.</p>
                </div>
            </div>
            </Container>
        </div>
    );
};

export default Pricing;