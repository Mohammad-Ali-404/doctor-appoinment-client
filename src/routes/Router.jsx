import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/AboutUs/About";
import Login from "../Page/Login/Login";
import Contact from "../Page/Contact/Contact";
import Register from "../Page/Register/Register";
import Team from "../Page/Team/Team";
import TeamDetails from "../Page/Team/TeamDetails/TeamDetails";

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
                element:<TeamDetails/>,
                loader: ({params}) =>fetch(`http://localhost:5000/team/${params.id}`)
                
            }
        ]
    }
])
export default router;