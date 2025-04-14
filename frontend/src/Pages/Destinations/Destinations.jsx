import React, { useEffect, useState } from 'react';

import DestinationsCard from '../../Components/DestinationsCard';


const Destinations = () => {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/flights")
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then(data => setFlights(data))
      .catch(err => console.error("❌ Error loading flights:", err));
  }, []);
  

  return (
    <div className="flex flex-wrap justify-center bg-[#fcf9f5] py-6">
      {flights.map((flight) => (
        <DestinationsCard  key={flight._id} flight={flight}/>
     ))}
    </div>
  );
};

export default Destinations;
