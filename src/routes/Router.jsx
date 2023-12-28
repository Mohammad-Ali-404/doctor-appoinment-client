import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/AboutUs/About";
import Login from "../Page/Login/Login";

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
                path:'about',
                element:<About/>
            }
        ]
    }
])
export default router;