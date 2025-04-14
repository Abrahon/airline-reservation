import React from 'react';
import { Link } from 'react-router-dom';

const DestinationsCard = ({data}) => {
    const {id, img, from,to,dateRange,price,classType,icon} = data;
  return (
    <Link to={`/destination/${id}`} className="block">
      <div className="bg-white shadow-lg rounded-lg w-72 p-4 mx-2 my-4 hover:shadow-xl transition">
        <img src={data.img} alt={from} className="rounded-md h-48 w-full object-cover" />
        <p className="text-sm text-gray-500 mt-2">{dateRange}</p>
        <h2 className="font-semibold text-lg mt-1">{from}</h2>
        <div className="flex justify-center items-center text-gray-600">⇌</div>
        <h2 className="font-semibold text-lg">{to}</h2>
        <div className="flex justify-center my-3">
          <button className="text-white px-4 py-1 rounded">
            <img src={icon} className="w-10 h-6" alt="icon" />
          </button>
        </div>
        <hr />
        <p className="text-sm text-gray-500 mt-3">{classType}</p>
        <p className="text-lg font-bold mt-1">${price}</p>
      </div>
    </Link>
  );
};

export default DestinationsCard;
