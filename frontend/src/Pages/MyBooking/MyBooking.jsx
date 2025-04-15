import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router";
// import { AuthContext } from "../../context/AuthProvider"; // Adjust path

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const { user } = useContext(AuthContext);
  const userEmail = user?.email || "test@example.com";
  const {_id} = useParams()

  console.log(bookings)
  console.log(userEmail)

  useEffect(() => {
    if (!userEmail) return; // Wait until userEmail is available
  
    fetch(`http://localhost:5000/bookings?email=${userEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched bookings:", data);
        setBookings(data);
      })
      .catch((err) => console.error("Error fetching bookings:", err));
  }, [userEmail]);
  

  const handleCancelBooking = async (bookingId) => {
    const confirm = window.confirm("Are you sure you want to cancel this booking?");
    if (!confirm) return;
  
    try {
      const res = await fetch(`http://localhost:5000/bookings/${bookingId}`, {
        method: "DELETE",
      });
  
      if (res.ok) {
        setBookings(bookings.filter((booking) => booking._id !== bookingId));
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "booking Cancelled successfully",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        alert("Failed to cancel booking.");
      }
    } catch (err) {
      console.error("Cancel error:", err);
    }
  };

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
            
          <Link to={`/payment/${booking._id}`}>
  <button className="px-5 py-2 border rounded text-blue-600 hover:bg-blue-100">
    Pay Online
  </button>
</Link>
            
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
