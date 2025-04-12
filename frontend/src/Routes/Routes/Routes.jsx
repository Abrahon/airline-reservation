import { createBrowserRouter } from "react-router";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import SignUp from "../../Pages/SignUp/SignUp";
import Login from "../../Pages/Login/Login";

import Contact from "../../Pages/Contact/Contact";
import About from "../../Pages/About/About";

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
            }
             
        ]
    }
])