import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";

const AllBooking = () => {
  const [bookings, setBookings] = useState([]);
  // const {user} = useContext(AuthCon)
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return; // Wait for user to be loaded
  
    const email = user.email;
  
    fetch(`http://localhost:5000/bookings?email=${email}`)
      .then(res => res.json())
      .then(data => {
        setBookings(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error("Error fetching bookings:", err));
  }, [user]);
  
  

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">All Flight Bookings</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 table-auto text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">#</th>
              <th className="p-3 border">User Email</th>
              <th className="p-3 border">From</th>
              <th className="p-3 border">To</th>
              <th className="p-3 border">Date</th>
              <th className="p-3 border">Class</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Booked At</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(bookings) && bookings.map((booking, index) => (
            <tr key={booking._id} className="hover:bg-gray-50">
            <td className="p-3 border">{index + 1}</td>
            <td className="p-3 border">{booking.email || "N/A"}</td>
            <td className="p-3 border">{booking.from}</td>
            <td className="p-3 border">{booking.to}</td>
            <td className="p-3 border">{booking.dateRange}</td>
            <td className="p-3 border">{booking.classType}</td>
            <td className="p-3 border">${booking.price}</td>
            <td className="p-3 border">
              {new Date(booking.bookedAt).toLocaleString()}
            </td>
         <tr key={booking._id}>

         </tr>

            
              
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllBooking;
