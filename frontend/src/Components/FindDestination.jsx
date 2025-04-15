// import React, { useState } from 'react'
import axios from "axios";
import { FaExchangeAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { MdFlightTakeoff } from "react-icons/md";
import { BsClipboard2Check } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

const FindDestination = () => {
    const [form, setForm] = useState({
        from: "",
        to: "",
        tripType: "Round Trip",
        depart: "",
        return: "",
        passengerClass: "Economy",
      });
    
      const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async () => {
        const res = await axios.post("https://wingbooker.vercel.app/api/flights/search", form);
        console.log(res.data);
      };

    return (
        <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-start p-4">
          {/* Navbar */}
          <div className="flex w-full bg-white shadow-md py-4 px-6 justify-between items-center max-w-6xl rounded-t-2xl">
            <div className="flex gap-6 text-sm font-semibold">
              <div className="text-[#681a3c] flex items-center gap-1">
                <MdFlightTakeoff />
                AIR BOOKING
              </div>
              <div className="flex items-center gap-1">
                <BsClipboard2Check /> MY TRIPS
              </div>
              <div className="flex items-center gap-1">
                <FaCheckCircle /> CHECK-IN
              </div>
              <div className="flex items-center gap-1">
                <MdFlightTakeoff /> FLIGHT STATUS
              </div>
            </div>
          </div>
    
          {/* Promo Info */}
          <div className="bg-[#681a3c] text-white w-full max-w-6xl p-3 flex flex-col rounded-b-md">
            <p className="text-xs">Just from $12</p>
            <p className="font-semibold">WingBooker</p>
          </div>
    
          {/* Search Form */}
          <div className="bg-white w-full max-w-6xl p-4 mt-4 rounded-xl shadow-lg flex flex-wrap items-center justify-between">
            <div className="flex items-center gap-4 flex-1">
              <div className="w-28">
                <label className="block text-sm text-gray-600">From</label>
                <input
                  type="text"
                  name="from"
                  value={form.from}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
    
              <FaExchangeAlt className="text-gray-500" />
    
              <div className="w-28">
                <label className="block text-sm text-gray-600">To</label>
                <input
                  type="text"
                  name="to"
                  value={form.to}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                />
              </div>
    
              <div className="w-32">
                <label className="block text-sm text-gray-600">Trip</label>
                <select
                  name="tripType"
                  value={form.tripType}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="One Way">One Way</option>
                  <option value="Round Trip">Round Trip</option>
                </select>
              </div>
    
              <div>
                <label className="block text-sm text-gray-600">Depart</label>
                <input
                  type="date"
                  name="depart"
                  value={form.depart}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
    
              <div>
                <label className="block text-sm text-gray-600">Return</label>
                <input
                  type="date"
                  name="return"
                  value={form.return}
                  onChange={handleChange}
                  className="p-2 border rounded"
                />
              </div>
    
              <div className="w-48">
                <label className="block text-sm text-gray-600">Passenger / Class</label>
                <select
                  name="passengerClass"
                  value={form.passengerClass}
                  onChange={handleChange}
                  className="w-full p-2 border rounded"
                >
                  <option value="Economy">1 Passenger, Economy</option>
                  <option value="Business">1 Passenger, Business</option>
                  <option value="First Class">1 Passenger, First Class</option>
                </select>
              </div>
            </div>
    
            <div className="mt-4 flex justify-end w-full">
              <button
                onClick={handleSubmit}
                className="bg-[#fcb900] hover:bg-yellow-400 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-1"
              >
                Show Flights <MdFlightTakeoff />
              </button>
            </div>
          </div>
        </div>
      );
    }


export default FindDestination