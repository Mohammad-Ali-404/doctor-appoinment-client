import React from 'react';
import Navbar from '../Page/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;