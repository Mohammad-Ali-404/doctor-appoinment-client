import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import Checkoutform from './Checkoutform';
import { loadStripe } from '@stripe/stripe-js';
import { Helmet } from 'react-helmet-async';
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

const Payment = () => {
    return (
        <div className='p-10 bg-slate-200'>
            <Helmet><title>Payment | One care</title></Helmet>
            <div className='py-5'>
                <h1 className='sm:text-2xl text-xl font-semibold '>Please Process</h1>
                <h2 className=' text-xl'>Payment</h2>
            </div>
            <Elements stripe={stripePromise}>
                <Checkoutform />
            </Elements>
        </div>
    );
};

export default Payment;