/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import Container from '../Shared/Container/Container';
import useAxiosSecure from '../../Hooks/UserAxiosSecure';
import { Helmet } from 'react-helmet-async';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { BsPatchCheck } from 'react-icons/bs';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Providers/AuthProvider';

const Pricing = () => {
    const { user } = useContext(AuthContext);
    const [pricing, setPricing] = useState([]);
    const [addedCards, setAddedCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [axiosSecure] = useAxiosSecure();
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get('http://localhost:5000/pricing');
                setPricing(response.data);
            } catch (error) {
                console.error('Error fetching pricing data:', error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [axiosSecure]);

    const handleSubscribe = async (monthly_price, name) => {
        if (user && user.email) {
            const cartItem = { price: monthly_price, name, email: user.email};
            try {
                const response = await axiosSecure.post('/subscribecart', cartItem);
                if (response.data.insertedId) {
                    setAddedCards([...addedCards, cartItem]);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Plan added. Now proceed with your payment',
                        icon: 'success',
                        confirmButtonText: 'Cool',
                    });
                    navigate('/dashboard/subscribecart')
                }
            } catch (error) {
                console.error('Error subscribing to the plan:', error);
            }
        } else {
            Swal.fire({
                title: 'Please Login to subscribe to our plan',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now',
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    };
    const isCardAdded = (cartItem) => addedCards.some(
        (addedCard) =>
            addedCard.price === cartItem.price && addedCard.name === cartItem.name
    );
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
                                        <p className="my-6 text-4xl font-bold dark:text-violet-400">${plan.monthly_price}/month</p>
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
                                        <Link><button onClick={() => handleSubscribe(plan.monthly_price, plan.name)}
                                            disabled={isCardAdded({
                                                price: plan.monthly_price,
                                                name: plan.name,
                                            })}className={`px-4 py-2 mt-4 font-semibold uppercase border rounded-lg md:mt-12 sm:py-3 sm:px-8 ${
                                                isCardAdded({
                                                    price: plan.monthly_price,
                                                    name: plan.name,
                                                })
                                                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                                                    : 'bg-gradient-to-t text-white from-[#8ae7e5] to-[#295d57]'
                                            }`}
                                            >Subscribe Now</button>
                                        </Link>
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