import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";
import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";
import Destinations from "../../Pages/Destinations/Destinations";
import DestinationDetails from "../../Pages/Destinations/DestinationDetails";
import AllUser from "../../Pages/Dashboard/AllUser/AllUser";
import AllBooking from "../../Pages/Dashboard/AllBooking/AllBooking";
import AddFlight from "../../Pages/Dashboard/AddFlight/AddFlight";
// import Dashboard from "../../Layout/Dashboard/DashboardLayout";
import AdminHome from "../../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../../Pages/Dashboard/UserHome/UserHome";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DashboardLayout from "../../Layout/Dashboard/DashboardLayout";
import AllFlights from "../../Pages/Destinations/Destinations";
import MyBookings from "../../Pages/MyBooking/MyBooking";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import PaymentHistory from "../../Pages/Dashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/destinations',
          element: <Destinations />,
        },
        {
          path: '/destination/:id',
          element: <DestinationDetails />,
        },
        {
          path: '/signup',
          element: <SignUp />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/my-booking',
          element: <MyBookings />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
       
        {
          path: 'admin-home',
          element: <AdminHome />,
        },
        {
          path: 'all-user',
          element: <AllUser />,
        },
        {
          path: 'all-booking',
          element: <AllBooking />,
        },
        {
          path: 'add-flight',
          element: <AddFlight />,
        },
        {
          path: '/dashboard/payment/:bookingId', 
          element: <Payment />,
        },
        {
          path: 'user-home',
          element: <UserHome />,
        },
        {
          path: 'payment-history',
          element:<PaymentHistory></PaymentHistory>
        }
      ],
    },
  ]);
  