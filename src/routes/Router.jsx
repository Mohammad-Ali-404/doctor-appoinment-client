import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import About from "../Page/AboutUs/About";

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
                path:'about',
                element:<About/>
            }
        ]
    }
])
export default router;