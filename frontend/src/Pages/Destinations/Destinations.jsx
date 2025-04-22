import React, { useEffect, useState } from 'react';
import DestinationsCard from '../../Components/DestinationsCard';
import Payment from '../Dashboard/Payment/Payment';

const Destinations = () => {
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null); // 🔑 Track selected flight

  useEffect(() => {
    fetch("https://wingbooker.vercel.app/flights")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setFlights(data))
      .catch(err => console.error(" Error loading flights:", err));
  }, []);
  // console.log(selectedFlight?.price)
  console.log("selectedFlight:", selectedFlight);


  return (
    <div>
      <h1 className='text-3xl font-3xl text-center'>Find Your Destinations</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {flights.map((flight) => (
          <DestinationsCard
            key={flight._id}
            flight={flight}
            onBookNow={() => setSelectedFlight(flight)} // 🔥 Set selected flight
          />
        ))}
      </div>

      {/* Show Stripe Payment only when a flight is selected */}
      {selectedFlight ? (
  <Payment
    flight={selectedFlight}
    price={selectedFlight.price}
    flightId={selectedFlight._id}
    
  />
) : (
  <p>Loading selected flight...</p>
)}

    </div>
  );
};

export default Destinations;
