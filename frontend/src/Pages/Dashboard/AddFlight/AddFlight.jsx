import React, { useState } from "react";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddFlight = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const from = form.from.value;
    const to = form.to.value;
    const price = parseFloat(form.price.value);
    const classType = form.classType.value;
    const imageFile = form.image.files[0];

    const formattedDateRange = `${startDate?.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })} – ${endDate?.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`;

    const formData = new FormData();
    formData.append("image", imageFile);

    try {
      const imageRes = await fetch(image_hosting_api, {
        method: "POST",
        body: formData,
      });

      const imageData = await imageRes.json();
      if (!imageData.success) throw new Error("Image upload failed");

      const newFlight = {
        from,
        to,
        dateRange: formattedDateRange,
        price,
        classType,
        img: imageData.data.url,
      };

      const res = await fetch("http://localhost:5000/flights", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFlight),
      });

      const data = await res.json();
      if (data.insertedId) {
        Swal.fire("Success", "Flight added successfully!", "success");
        form.reset();
        setDateRange([null, null]);
      } else {
        throw new Error("Flight add failed");
      }
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Flight</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4">
        <input name="from" placeholder="From (e.g. Jakarta (DXB))" required className="input input-bordered w-full" />
        <input name="to" placeholder="To (e.g. New York (USA))" required className="input input-bordered w-full" />

        {/* 📅 Date Range Picker */}
        <div>
          <label className="block mb-1 font-medium">Select Date Range*</label>
          <DatePicker
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => setDateRange(update)}
            isClearable
            placeholderText="Select date range"
            dateFormat="dd MMM yyyy"
            className="input input-bordered w-full"
            required
          />
        </div>

        <input name="price" type="number" placeholder= "Price" required className="input input-bordered w-full" />

        <select name="classType" required className="select select-bordered w-full">
          <option value="">Select Class</option>
          <option value="Economy Class">Economy Class</option>
          <option value="Business Class">Business Class</option>
          <option value="First Class">First Class</option>
        </select>

        <input type="file" name="image" accept="image/*" required className="file-input file-input-bordered w-full" />

        <button type="submit" className="btn btn-primary w-full">Add Flight</button>
      </form>
    </div>
  );
};

export default AddFlight;
