import React from 'react'
import Banner from './Banner'
import FlightFAQ from '../../../Components/FlightFAQ'
// import Destination from '../../../Components/Destination'
import FindDestination from '../../../Components/FindDestination'
import Destinations from '../../Destinations/Destinations'
// import AllFlights from '../../Destinations/Destinations'
// import FlightFAQ from '../../../Components/FlightFAQ'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FindDestination></FindDestination>
      <Destinations></Destinations>
      {/* <AllFlights></AllFlights> */}
      <FlightFAQ></FlightFAQ>
      
    </div>
  )
}

export default Home