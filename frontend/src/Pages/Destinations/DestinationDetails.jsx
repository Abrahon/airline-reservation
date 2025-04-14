import { useParams, Link, useNavigate } from 'react-router-dom';
import dubai from '../../assets/dubai.jpg';
import switzerland from '../../assets/switzerland.jpg';
import denmark from '../../assets/denmark.jpg';
import jakarta from '../../assets/jakarta.jpg';
import { useContext } from 'react';
import { BookingsContext } from '../../context/BookingProvider';
import Swal from 'sweetalert2';
// import { Link, useParams } from 'react-router';

const destinations = [
  {
    id: '1',
    img: dubai,
    from: 'Dubai (DXB)',
    to: 'New York (USA)',
    dateRange: '09 Jun – 16 Jun 2025',
    price: 195,
    classType: 'Economy',
    description: 'Experience luxury shopping, ultramodern architecture and vibrant nightlife.',
  },
  {
    id: '2',
    img: switzerland,
    from: 'Switzerland (SWL)',
    to: 'New York (USA)',
    dateRange: '09 Jun – 16 Jun 2025',
    price: 800,
    classType: 'Business',
    description: 'Explore breathtaking Alpine landscapes and charming old towns.',
  },
  {
    id: '3',
    img: denmark,
    from: 'Denmark (DEK)',
    to: 'New York (USA)',
    dateRange: '09 Jun – 16 Jun 2025',
    price: 350,
    classType: 'Economy',
    description: 'Enjoy the Scandinavian charm, design, and modern culture.',
  },
  {
    id: '4',
    img: jakarta,
    from: 'Jakarta (JKT)',
    to: 'New York (USA)',
    dateRange: '09 Jun – 16 Jun 2025',
    price: 220,
    classType: 'Business',
    description: 'Dive into the heart of Indonesia with rich culture and cuisine.',
  },
];

const DestinationDetails = () => {
    const { id } = useParams();
    const { addBooking } = useContext(BookingsContext);
    const destination = destinations.find(dest => dest.id === id);
    const navigate = useNavigate();
  
    const handleBooking = () => {
      addBooking(destination);
      Swal.fire({
        title: "flight booking added!",
        icon: "success",
        draggable: true
      });
      navigate('/my-booking'); 
      
    };
  
    if (!destination) {
      return <div className="text-center py-10 text-red-600">Destination not found.</div>;
    }

  return (
    <div className="max-w-4xl mx-auto p-6">
        <h2>Destination: {id}</h2>
      <Link to="/" className="text-blue-600 underline">← Back to all destinations</Link>
      <img src={destination.img} alt={destination.from} className="w-full h-80 object-cover rounded-lg my-4" />
      <h1 className="text-2xl font-bold">{destination.from} → {destination.to}</h1>
      <p className="text-gray-500 mt-2">{destination.dateRange} • {destination.classType} Class</p>
      <p className="text-lg mt-4">{destination.description}</p>
      <div className="mt-6 p-4 bg-[#f3f4f6] rounded-lg">
        <p className="text-xl font-semibold">Price: <span className="text-green-600">${destination.price}</span></p>
        <button onClick={handleBooking} className="mt-4 bg-[#1967d2] text-white px-6 py-2 rounded hover:bg-blue-700">
        Book This Flight
      </button>
      </div>
    </div>
  );
};

export default DestinationDetails;
