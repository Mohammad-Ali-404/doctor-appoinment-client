import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const Checkoutform = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event) =>{
        console.log(event);
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);
        console.log(card);
        if (card == null) {
            return;
        }
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });
      
          if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }
        
    }
    return (
        <div>
             <form onSubmit={handleSubmit} className='sm:w-2/4 '>
                <div className='p-4 border-2 bg-red-50 '>
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
                <button className='text-base px-4 py-1 mt-4 rounded bg-gradient-to-t from-[#9dc1f7] to-[#81abeb]' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default Checkoutform;