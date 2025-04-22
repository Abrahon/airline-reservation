
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider';

const DestinationDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);
  const { user } = useContext(AuthContext);
   const userEmail = user?.email;

  useEffect(() => {
    fetch(`https://wingbooker.vercel.app/flights/${id}`)
      .then(res => res.json())
      .then(data => setFlight(data))
      .catch(err => console.error("Error fetching flight:", err));
  }, [id]);

  const handleBookFlight = async () => {
    if (!userEmail) {
      Swal.fire({
        icon: "warning",
        title: "Login Required",
        text: "You must be logged in to book a flight!",
      });
      return;
    }
  
    try {
      const { _id, ...flightDataWithoutId } = flight;
  
      const bookedFlight = {
        ...flightDataWithoutId,
        userEmail,
        bookedAt: new Date().toISOString()
      };
  
      const response = await fetch('https://wingbooker.vercel.app/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bookedFlight)
      });
  
      const data = await response.json();
  
      if (data.insertedId) {
        // Use setTimeout to give UI time to update before showing modal
        setTimeout(() => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Flight booked successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }, 0);
      }
    } catch (err) {
      console.error("Booking failed:", err);
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "Something went wrong while booking your flight."
      });
    }
  };
  

  if (!flight) return <p className="text-center mt-20">Loading...</p>;
  return (
    <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 mt-10">
      <img src={flight.img} alt={flight.from} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{flight.from} ➡ {flight.to}</h2>
      <p className="text-gray-600 mt-2">Date: {flight.dateRange}</p>
      <p className="text-gray-600">Class: {flight.classType}</p>
      <p className="text-xl font-semibold mt-2">${flight.price}</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, adipisci corrupti consequuntur, itaque velit fuga aliquam eum culpa nostrum optio iste cupiditate! Necessitatibus tempore soluta blanditiis, illum temporibus sequi voluptates.</p>

      {/*Functional Book Button */}
      <button
        onClick={handleBookFlight}
        className="mt-6 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Book This Flight
      </button>
    </div>
  );
};
export default DestinationDetails;