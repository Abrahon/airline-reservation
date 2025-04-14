import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const DestinationDetails = () => {
  const { id } = useParams();
  const [flight, setFlight] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/flights/${id}`)
      .then(res => res.json())
      .then(data => setFlight(data))
      .catch(err => console.error("Error fetching flight:", err));
  }, [id]);

  const handleBookFlight = () => {
    const bookedFlight = {
      ...flight,
      bookedAt: new Date()
    };

    fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookedFlight)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Flight Booking added successfully",
            showConfirmButton: false,
            timer: 1500
          });
        }
      })
      .catch(err => {
        console.error("Booking failed:", err);
        alert("Booking failed");
      });
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

      {/* ✅ Functional Book Button */}
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
