/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAxiosSecure from '../../../../Hooks/UserAxiosSecure';
import { AuthContext } from '../../../../Providers/AuthProvider';
import UseSubcribeCart from '../../../../Hooks/UseSubcribeCart';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Checkoutform = () => {
  const {user} = useContext(AuthContext)
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure()
  const [clientSecret, setClientSecret] = useState('')
  const [processing, setProcessing] = useState(false)
  const [transactionId, setTransactionId] = useState('')
  const [cart, refetch] = UseSubcribeCart();
  const navigate = useNavigate();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

  useEffect(() => {
    if (totalPrice > 0) {
        axiosSecure.post('/create-payment-intent', { price: totalPrice })
            .then(res => {
                console.log(res.data.clientSecret);
                setClientSecret(res.data.clientSecret);
            })
    }

}, [axiosSecure, totalPrice])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }

    
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });

      if (error) {
        console.error('[error]', error);
      } else {
        console.log('[PaymentMethod]', paymentMethod);
      }


      setProcessing(true)
      const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                  name: user?.displayName || 'anonymous',
                  email: user?.email || 'anonymous',                  
                },
              },
          }
        );
        if (confirmError) {
          console.log('Error confirming payment:', confirmError);
        } else {
            console.log('PaymentIntent:', paymentIntent);
            // Handle successful payment
        }
        setProcessing(false)
        if (paymentIntent && paymentIntent.status === 'succeeded') {
          setTransactionId(paymentIntent.id)
          const payment ={
              transactionId: paymentIntent.id,
              name: user?.displayName || 'anonymous',
              email: user?.email || 'anonymous',
              cartIds: cart.map(item => item._id),
              price: cart.map(item => item.price),
              planName: cart.map(item => item.name),
          }
          const res = await axiosSecure.post('/payments', payment);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Payment Successfull",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate('/dashboard/paymentHistory')
                }

        }
        
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='sm:w-2/4'>
        <div className='p-4 border-2 bg-red-50'>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#2d2e2e',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
        </div>
        <button
          className='text-base px-4 py-2 mt-4 rounded bg-gradient-to-t from-[#9dc1f7] to-[#81abeb]'
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? 'Processing...' : 'Pay'}
        </button>
      </form>
      <div className='mt-4'>
      <p className='text-xl font-semibold'>Total Cart Price: ${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Checkoutform;
