import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CheckoutForm from "./CheckoutForm";
import { CardElement, Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK); 
console.log(stripePromise)

const Payment = () => {
  const { bookingId } = useParams(); // assumes route is /payment/:id
  const [booking, setBooking] = useState([]);
  console.log(bookingId)

  useEffect(() => {
    if (!bookingId) return;

    fetch(`http://localhost:5000/bookings/${bookingId}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Booking not found");
        }
        return res.json();
      })
      .then(data => setBooking(data))
      .catch(err => console.error("Error loading booking:", err));
  }, [bookingId]);

 

  return (
    <div>
      <h1>Booking Payment</h1>
     
      <p>Price: $<span className="font-semibold">{booking?.price}</span></p>
      {/* Stripe Form would go here */}
      {booking?.price && (
  <Elements stripe={stripePromise}>
    <CheckoutForm
      bookingId={booking._id}
      price={booking.price}
      title={`${booking.from} to ${booking.to}`}
    />
  </Elements>
)}

    </div>
  );
};

export default Payment;
