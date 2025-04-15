
import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsCard = ({ flight }) => {
  const { _id, img, from, to, dateRange, price, classType } = flight;

  return (
    <div>
      <Link to={`/destination/${_id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg p-4 mx-2 my-4 hover:shadow-xl transition duration-200 ease-in-out">
        <img
          src={img}
          alt={`${from} to ${to}`}
          className="rounded-md h-48 w-full object-cover"
        />
        <p className="text-sm text-gray-500 mt-2">{dateRange}</p>
        <h3 className="mt-2 text-lg font-bold">{from} ➡ {to}</h3>
        <p className="text-sm text-gray-500 mt-3">{classType}</p>
        <p className="text-lg font-bold mt-1">${price}</p>
      </div>
    </Link>
    </div>
  );
};

export default DestinationsCard;
