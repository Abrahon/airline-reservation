// import React from 'react'

// const flights = [
//     {
//       "id": "FL001",
//       "airline": "SkyWings Airlines",
//       "flightNumber": "SW123",
//       "origin": "New York (JFK)",
//       "destination": "Los Angeles (LAX)",
//       "departureTime": "2025-04-14T08:00:00",
//       "arrivalTime": "2025-04-14T11:15:00",
//       "price": 320,
//       "seatsAvailable": 50
//     },
//     {
//       "id": "FL002",
//       "airline": "AeroNova",
//       "flightNumber": "AN456",
//       "origin": "Chicago (ORD)",
//       "destination": "Miami (MIA)",
//       "departureTime": "2025-04-14T14:30:00",
//       "arrivalTime": "2025-04-14T18:00:00",
//       "price": 260,
//       "seatsAvailable": 30
//     },
//     {
//       "id": "FL003",
//       "airline": "PacificAir",
//       "flightNumber": "PA789",
//       "origin": "San Francisco (SFO)",
//       "destination": "Seattle (SEA)",
//       "departureTime": "2025-04-14T10:00:00",
//       "arrivalTime": "2025-04-14T11:45:00",
//       "price": 150,
//       "seatsAvailable": 20
//     },
//     {
//       "id": "FL004",
//       "airline": "GlobalJet",
//       "flightNumber": "GJ321",
//       "origin": "Dallas (DFW)",
//       "destination": "Denver (DEN)",
//       "departureTime": "2025-04-14T13:15:00",
//       "arrivalTime": "2025-04-14T14:50:00",
//       "price": 180,
//       "seatsAvailable": 40
//     },
//     {
//       "id": "FL005",
//       "airline": "EagleFly",
//       "flightNumber": "EF654",
//       "origin": "Atlanta (ATL)",
//       "destination": "Boston (BOS)",
//       "departureTime": "2025-04-14T17:45:00",
//       "arrivalTime": "2025-04-14T20:30:00",
//       "price": 220,
//       "seatsAvailable": 10
//     },
//     {
//       "id": "FL006",
//       "airline": "NovaWings",
//       "flightNumber": "NW007",
//       "origin": "Orlando (MCO)",
//       "destination": "Houston (IAH)",
//       "departureTime": "2025-04-14T12:00:00",
//       "arrivalTime": "2025-04-14T13:40:00",
//       "price": 170,
//       "seatsAvailable": 35
//     },
//     {
//       "id": "FL007",
//       "airline": "CloudNine",
//       "flightNumber": "CN101",
//       "origin": "Las Vegas (LAS)",
//       "destination": "Phoenix (PHX)",
//       "departureTime": "2025-04-14T15:30:00",
//       "arrivalTime": "2025-04-14T16:30:00",
//       "price": 120,
//       "seatsAvailable": 25
//     },
//     {
//       "id": "FL008",
//       "airline": "JetBliss",
//       "flightNumber": "JB202",
//       "origin": "Detroit (DTW)",
//       "destination": "Charlotte (CLT)",
//       "departureTime": "2025-04-14T09:00:00",
//       "arrivalTime": "2025-04-14T11:20:00",
//       "price": 200,
//       "seatsAvailable": 15
//     },
//     {
//       "id": "FL009",
//       "airline": "FlyNova",
//       "flightNumber": "FN303",
//       "origin": "Philadelphia (PHL)",
//       "destination": "San Diego (SAN)",
//       "departureTime": "2025-04-14T07:45:00",
//       "arrivalTime": "2025-04-14T11:30:00",
//       "price": 350,
//       "seatsAvailable": 5
//     },
//     {
//       "id": "FL010",
//       "airline": "VelocityAir",
//       "flightNumber": "VA404",
//       "origin": "Minneapolis (MSP)",
//       "destination": "Newark (EWR)",
//       "departureTime": "2025-04-14T16:00:00",
//       "arrivalTime": "2025-04-14T18:30:00",
//       "price": 210,
//       "seatsAvailable": 18
//     }
//   ]
  

// const Flight = () => {
//   return (
//     <div className='flex justify-center my-20'>
//         <div className='mx-6 grid md:grid-cols-3 lg:grid-cols-4 gap-8'>
//             {
//                 flights.map(flight =>
//                     <div key={flight.id} className="xl:w-96 shadow-xl px-2 py-5 rounded-lg">
//                         {/* <BsPlayCircleFill className="relative top-32 left-32 text-3xl text-black bg-white rounded-full" /> */}
//                         {/* <img className="h-64 md:h-80 md:w-80 mx-auto" src={flight?.img} alt="" /> */}
//                         <div className="text-center mt-2">
//                             <h1 className="text-xl font-semibold">{flight?.airline}</h1>
//                             <p>{flight?.flightNumber}</p>
//                             <div className="flex justify-center">
//                                 {/* <button className="flex items-center text-sm mt-4 hover:text-lime-400">Learn more <BsArrowRight className='ml-1 text-lg' /></button> */}
//                             </div>
//                         </div>
//                     </div>)
//             }
//         </div>
//     </div>
//   )
// }

// export default Flight