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
import Dashboard from "../../Layout/Dashboard/DashboardLayout";
import AdminHome from "../../Pages/Dashboard/AdminHome/AdminHome";
import UserHome from "../../Pages/Dashboard/UserHome/UserHome";
import Payment from "../../Pages/Dashboard/Payment/Payment";
import DashboardLayout from "../../Layout/Dashboard/DashboardLayout";
import AllFlights from "../../Pages/Destinations/Destinations";
import MyBookings from "../../Pages/MyBooking/MyBooking";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: '/',
                element:<Destinations></Destinations>
            },
            {
                path:'/destination/:id',
                element:<DestinationDetails></DestinationDetails>
            },
           
            {
                path: 'signup',
                element:<SignUp></SignUp>
            },
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path: '/contact',
                element:<Contact></Contact>
            },
            {
                path:'my-booking',
                element:<MyBookings></MyBookings>
            },
             
        ]
    },
    {
        path:'/dashboard',
        element:<DashboardLayout></DashboardLayout>,
        children:[
            
            {
                path:'admin-home',
                element:<AdminHome></AdminHome>
            },
          
            {
                path:'all-user',
                element:<AllUser></AllUser>
            },
            
            {
                path:'all-booking',
                element:<AllBooking></AllBooking>

            },
            {
                path:'add-flight',
                element:<AddFlight></AddFlight>
            },
            {
                path:"payment",
                element:<Payment></Payment>
            },
           
            {
                path:"user-home",
                element:<UserHome></UserHome>
            },
           
        ]
    }

])