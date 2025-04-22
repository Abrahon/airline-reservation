import React, { useState } from 'react';
import DestinationsCard from './DestinationsCard';

const SearchFlights = () => {
  const [form, setForm] = useState({
    from: '',
    to: '',
    passengerClass: 'Economy Class',
  });

  const [results, setResults] = useState([]);
  const [notFound, setNotFound] = useState(false);
  console.log(results);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    if (!form.from || !form.to || !form.passengerClass) {
      alert('Please fill in all fields');
      return;
    }

    fetch('http://localhost:5000/flights/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: form.from.trim().toLowerCase(),
        to: form.to.trim().toLowerCase(),
        passengerClass: form.passengerClass,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          setResults([]);
          setNotFound(true);
          return [];
        }
        return res.json();
      })
      .then((data) => {
        if (data && data.length > 0) {
          setResults(data);
          setNotFound(false);
        } else {
          setResults([]);
          setNotFound(true);
        }
      })
      .catch((err) => {
        console.error('Search error:', err);
        setNotFound(true);
        setResults([]);
      });
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4 text-center">Search Flights</h2>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <input
          type="text"
          name="from"
          placeholder="From"
          value={form.from}
          onChange={handleChange}
          className="p-2 border rounded w-40"
        />
        <input
          type="text"
          name="to"
          placeholder="To"
          value={form.to}
          onChange={handleChange}
          className="p-2 border rounded w-40"
        />
        <select
          name="passengerClass"
          value={form.passengerClass}
          onChange={handleChange}
          className="p-2 border rounded w-48"
        >
          <option value="Economy Class">Economy</option>
          <option value="Business Class">Business</option>
          <option value="First Class">First Class</option>
        </select>

        <button
          onClick={handleSearch}
          className="bg-[#fcb900] hover:bg-yellow-400 px-4 py-2 rounded font-semibold"
        >
          Show Flights
        </button>
      </div>

      {notFound ? (
        <p className="text-center text-red-500 font-semibold">No flights found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((flight) => (
            <DestinationsCard key={flight._id} flight={flight} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFlights;
