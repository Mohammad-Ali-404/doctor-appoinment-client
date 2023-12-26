import React from 'react';
import Navbar from '../Page/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Page/Shared/Footer/Footer';
import SubscribeEmail from '../Page/Shared/SubscribeEmail/SubscribeEmail';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <SubscribeEmail/>
            <Footer/>
        </div>
    );
};

export default Main;