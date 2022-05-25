import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({order}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError] = useState('');
    const [success, setSuccess] = useState('')
    const [processing, setProcessing] = useState(false)
    const [clientSecret, setClientSecret] = useState('');
    const {totalPrice,username,email} = order;
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {

        const paymentIntent = async()=>{
    

            const settings = {
                method:'POST',
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                 
                },
                body: JSON.stringify({price : totalPrice}),
            }

            const response = await fetch(`http://localhost:5000/create-payment-intent`,settings);
            const data = await response.json();
           
            if(data?.clientSecret){
                setClientSecret(data.clientSecret)
            }

        }

        paymentIntent();

       


    },[totalPrice])


    const handleSubmit = async(e) => {
        e.preventDefault();
        if (!stripe || !elements) {
            return;
          }

          const card = elements.getElement(CardElement)

          if (card === null) {
            return;
        }
        
          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
          });

          if(error){
            setCardError(error?.message);
          }else{
            setCardError('');
            setProcessing(true)
            //confirm card payment
            const {paymentIntent, error : intentError} = await stripe.confirmCardPayment(
                clientSecret,
                {
                  payment_method: {
                    card: card,
                    billing_details: {
                      name: username,
                      email : email
                    },
                  },
                },
              );


                if(intentError){
                    setProcessing(false)
                    setCardError(intentError?.message)
                    success('')
                }else{
                    
                    setCardError('')
                    console.log(paymentIntent)
                    setTransactionId(paymentIntent.id)
                    setSuccess('Your payment has successfully been processed');

                    const payment = {
                        order : order._id,
                        transactionId : paymentIntent.id
                    }

                    fetch(`http://localhost:5000/order/${order._id}`,{



                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                     
                    },
                    body: JSON.stringify(payment),

                    }).then(res => res.json())
                    .then(data =>{
                        setProcessing(false)
                        console.log(data)

                    
                    })



                }


          }

    }
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className="btn btn-primary mt-20 text-white"type="submit" disabled={!stripe || !clientSecret || success} >
                    Process Payment
                </button>
                <p className='text-red-600'>{cardError}</p>
                <p className='text-green-600'>{success}</p>
                <p className='text-orange-400'>transition id : {transactionId}</p>
            </form>
        </div>
    );
};

export default CheckoutForm;