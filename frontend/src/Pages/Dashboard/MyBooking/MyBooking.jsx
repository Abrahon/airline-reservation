import React, { useContext } from 'react';
import { BookingsContext } from '../../../context/BookingProvider';
// import { BookingsContext } from '../../context/BookingsContext';

const MyBooking = () => {
  const { bookings, removeBooking } = useContext(BookingsContext);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600">You have no bookings yet.</p>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={index}
            className="flex items-center justify-between border border-gray-200 rounded-lg p-4 mb-6 shadow-sm"
          >
            {/* Left: Image */}
            <img
              src={booking.img}
              alt={booking.from}
              className="w-28 h-28 object-cover rounded-lg"
            />

            {/* Middle: Flight Info */}
            <div className="flex-1 px-6">
              <h3 className="text-xl font-semibold">
                {booking.from} → {booking.to}
              </h3>
              <p className="text-gray-600">{booking.classType} Class</p>
              <p className="text-gray-600">Dates: {booking.dateRange}</p>
              <p className="text-gray-600">Price: ${booking.price}</p>
            </div>

            {/* Right: Buttons */}
            <div className="flex flex-col items-end space-y-3">
              <button className="px-4 py-2 border rounded text-blue-600 hover:bg-blue-100">
                Pay Online
              </button>
              <button
                onClick={() => removeBooking(booking.id)}
                className="px-4 py-2 border rounded text-red-600 hover:bg-red-100"
              >
                Cancel Booking
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyBooking;
