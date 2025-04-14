import React from 'react';
import dubai from '../../assets/dubai.jpg' 
import denmark from '../../assets/denmark.jpg' 
import switzerland from '../../assets/switzerland.jpg' 
import jakarta from '../../assets/jakarta.jpg' 
import businessIcon from '../../assets/business.jpg' 
import airplaneIcon from '../../assets/airplain.jpg' 

import DestinationsCard from '../../Components/DestinationsCard';

const datas = [
  {
    id:1,
    img: dubai,
    from: 'Dubai (DXB)',
    to: 'New York (USA)',
    dateRange: '09 Jun 2025 – 16 Jun 2025',
    price: 195,
    classType: 'Economy from',
    icon: airplaneIcon,
  },
  {
    id:2,
    img: switzerland,
    from: 'Switzerland (SWL)',
    to: 'New York (USA)',
    dateRange: '09 Jun 2025 – 16 Jun 2025',
    price: 800,
    classType: 'Business Class',
    icon: businessIcon,
  },
  {
    id:3,
    img: denmark,
    from: 'Denmark (DEK)',
    to: 'New York (USA)',
    dateRange: '09 Jun 2025 – 16 Jun 2025',
    price: 350,
    classType: 'Economy from',
    icon: airplaneIcon,
  },
  {
    id:4,
    img: jakarta,
    from: 'Jakarta (DXB)',
    to: 'New York (USA)',
    dateRange: '09 Jun 2025 – 16 Jun 2025',
    price: 220,
    classType: 'Business Class',
    icon: businessIcon,
  },
];

const Destinations = () => {
  return (
    <div className="flex flex-wrap justify-center bg-[#fcf9f5] py-6">
      {datas.map((data) => (
        <DestinationsCard key={data.id} data={data} />
     ))}
    </div>
  );
};

export default Destinations;
