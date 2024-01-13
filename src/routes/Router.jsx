import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/AboutUs/About";
import Login from "../Page/Login/Login";
import Contact from "../Page/Contact/Contact";
import Register from "../Page/Register/Register";
import Team from "../Page/Team/Team";
import TeamDetails from "../Page/Team/TeamDetails/TeamDetails";
import Services from "../Page/Services/Services";
import ServiceDetails from "../Page/Services/ServicesDetails.jsx/ServiceDetails";
import Pricing from "../Page/Pricing/Pricing";
import Blog from "../Page/Blog/Blog";
import BlogDetails from "../Page/Blog/BlogDetails/BlogDetails";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dasboard";
import Alluser from "../Page/Dashboard/AdminDashboard/AllUsers/Alluser";
import AdminRoute from "./AdminRoute";
import AddTeamMember from "../Page/Dashboard/AdminDashboard/TeamMember/AddTeamMember";
import ManageTeamMember from "../Page/Dashboard/AdminDashboard/TeamMember/ManageTeamMember";
import Payment from "../Page/Dashboard/UserDashboard/Payment/Payment";
import SubscribeCart from "../Page/Dashboard/UserDashboard/SubscribeCart/SubscribeCart";
import PaymentHistory from "../Page/Dashboard/UserDashboard/Payment/PaymentHistory";
import AllPaymentHistory from "../Page/Dashboard/AdminDashboard/PaymentHistory/AllPaymentHistory";

const router = createBrowserRouter ([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'login',
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:"contact",
                element:<Contact/>
            },
            {
                path:"team",
                element:<Team/>
            },
            {
                path:"/teamdetails/:id",
                element: <PrivateRoute><TeamDetails/></PrivateRoute>,
                loader: ({params}) =>fetch(`http://localhost:5000/team/${params.id}`)
            },
            {
                path:"service",
                element:<Services/>
            },
            {
                path:"/servicedetails/:id",
                element:<ServiceDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/service/${params.id}`)
            },
            {
                path:"pricing",
                element:<Pricing/>
            },
            {
                path:"blog",
                element:<Blog/>
            },
            {
                path:'/blogdetails/:id',
                element:<BlogDetails/>,
                loader: ({params}) => fetch(`http://localhost:5000/blogs/${params.id}`)
            }
        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard/></PrivateRoute>,
        children:[
            {
                path:'payment',
                element:<Payment/>
            },
            {
                path:"subscribecart",
                element:<SubscribeCart/>
            },
            {
                path:"paymentHistory",
                element:<PaymentHistory/>
            },
            // admin routes
            {
                path:'allusers',
                element:<AdminRoute><Alluser/></AdminRoute>
            },
            {
                path:'addteammember',
                element:<AdminRoute><AddTeamMember/></AdminRoute> 
            },
            {
                path:'manageteammember',
                element:<AdminRoute><ManageTeamMember/></AdminRoute> 
            },
            {
                path:"payment-history",
                element:<AdminRoute><AllPaymentHistory/></AdminRoute>
            }
            // {
            //     path:'addservice',
            //     element:<AdminRoute><AddServiceData/></AdminRoute> 
            // },

        ]
    }

])
export default router;