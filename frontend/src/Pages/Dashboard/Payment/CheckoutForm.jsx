import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { AuthContext } from '../../../context/AuthProvider';
import Swal from 'sweetalert2';

const CheckoutForm = ({ price, bookingId, title}) => {
  const stripe = useStripe();
  const elements = useElements();
  console.log(price)

  const [paymentSuccess, setPaymentSuccess] = useState('');
  const [error, setError] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const[bookings, setBookings] = useState([])

  const { user } = useContext(AuthContext);



  useEffect(() => {
    if (!price || !user?.email || !title) return;
  
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price }), // send `price`, not `amount`
    })
      .then(res => res.json())
      .then(data => {
        console.log("📦 Received client secret:", data.clientSecret);
        setClientSecret(data.clientSecret);
      })
      .catch(err => console.error("❌ Error fetching client secret:", err));
  }, [price, user?.email, title]);
  
  

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!stripe || !elements) return;
  
    const card = elements.getElement(CardElement);
    if (!card) return;
  
    const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });
  
    if (methodError) {
      setError(methodError.message);
    } else {
      setError('');
      console.log("Payment method:", paymentMethod);
    }
  
    if (!clientSecret) {
      console.error("❌ Client secret missing");
      return;
    }
  
    const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || user?.name || "No Name"
        },
      },
    });
  
    if (confirmError) {
      console.log("Confirm error:", confirmError.message);
      setError(confirmError.message);
    } else {
      console.log("payment intent", paymentIntent);
      if (paymentIntent.status === 'succeeded') {
        console.log("✅ Payment successful:", paymentIntent.id);
        setPaymentSuccess(paymentIntent.id);
  
        const payment = {
          transactionId: paymentIntent.id,
          amount: price,
          email: user?.email,
          bookingId: bookingId,
          flightTitle: title,
          paymentTime: new Date().toISOString(),
          status: 'pending'
        };
  
        fetch('http://localhost:5000/payments', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          // ✅ Now data is parsed JSON
          console.log("💾 Payment info saved & booking deleted:", data);
          console.log("📤 Sending bookingId:", bookingId);
        
          if (data?.insertedId && data?.deletedBooking === 1) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "✅ Payment completed and booking removed!",
              showConfirmButton: false,
              timer: 1500
            });
           
            // fetchBookings?.(); // optional re-fetch
          } else if (data?.insertedId && data?.deletedBooking === 0) {
            alert("⚠️ Payment saved, but booking not found or already deleted.");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "❌ Something went wrong with payment or booking deletion.",
            });
            
          }
        });
        
      }
    }
  };
  
  

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md p-4 border rounded shadow mx-auto">
      <h2 className="text-xl font-semibold mb-4">Enter your payment details</h2>
      <CardElement className="p-2 border mb-4 rounded" />
      {error && <div className="text-red-500 mb-2">{error}</div>}
      <button
        type="submit"
        disabled={!stripe || !clientSecret }
      //   className={`bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 
      //     ${(!stripe || !clientSecret || processing) ? 'opacity-50 cursor-not-allowed' : ''}`}
      // >
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-green-500'>
        {/* {processing ? 'Processing...' : 'Pay Now'} */}
        Pay Now
      </button>

      {paymentSuccess && (
        <p className="text-green-600 mt-4">Payment successful! 🎉 {paymentSuccess}</p>
      )}
    </form>
  );
};

export default CheckoutForm;
