import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
// import { AuthContext } from "../../context/AuthProvider"; // Adjust path

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email;

  useEffect(() => {
    if (!userEmail) return;

    fetch(`http://localhost:5000/bookings?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => setBookings(data))
      .catch((err) => console.error("Error fetching bookings:", err));
  }, [userEmail]);

  

  return (
    <div className="max-w-6xl mx-auto p-6">
    <h2 className="text-2xl font-bold mb-6">My Bookings</h2>

    {bookings.length === 0 ? (
      <p>No bookings yet.</p>
    ) : (
      bookings.map((booking, index) => (
        <div
          key={index}
          className="flex items-center justify-between bg-white border rounded-lg shadow p-4 mb-6"
        >
          {/* Image */}
          <div className="w-32 h-32 flex-shrink-0">
            <img
              src={booking.img}
              alt={booking.from}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Info */}
          <div className="flex-1 px-6">
            <h3 className="text-xl font-semibold">
              {booking.from} → {booking.to}
            </h3>
            <p className="text-gray-600">{booking.classType} Class</p>
            <p className="text-gray-600">
              <strong>Date & Time:</strong> {booking.dateRange}
            </p>
            <p className="text-gray-600">
              <strong>Price:</strong> ${booking.price}
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col items-end space-y-3">
            <button
              onClick={() => alert("Redirecting to payment gateway...")}
              className="px-5 py-2 border rounded text-blue-600 hover:bg-blue-100"
            >
              Pay Online
            </button>
            <button
              onClick={() => handleCancelBooking(booking._id)}
              className="px-5 py-2 border rounded text-red-600 hover:bg-red-100"
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

export default MyBookings;
