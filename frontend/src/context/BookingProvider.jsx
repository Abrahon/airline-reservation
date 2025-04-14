// src/context/BookingsContext.js
// import React, { createContext, useState } from 'react';

import { createContext, useState } from "react";

export const BookingsContext = createContext();

const BookingProvider = ({ children }) => {
  const [bookings, setBookings] = useState([]);
  console.log(bookings)

  const addBooking = (flight) => {
    setBookings((prev) => [...prev, flight]);
  };
  const removeBooking = (id) => {
    setBookings((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <BookingsContext.Provider value={{ bookings, addBooking, removeBooking }}>
      {children}
    </BookingsContext.Provider>
  );
};

export default BookingProvider;
