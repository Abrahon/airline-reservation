
import React, { useEffect, useState } from 'react';

import DestinationsCard from '../../Components/DestinationsCard';
const Destinations = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("https://wingbooker.vercel.app/flights")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setFlights(data))
      .catch(err => console.error(" Error loading flights:", err));
  }, []);
  

  return (
    <div >
      <h1 className='text-3xl font-3xl text-center'>Find Your Destinations</h1>
      <div className="grid grid cols-1 md:grid-cols-3 lg:grid-cols-4">
      
      {flights.map((flight) => (
        <DestinationsCard  key={flight._id} flight={flight}/>
     ))}
    </div>
    </div>
  );
};

export default Destinations;
