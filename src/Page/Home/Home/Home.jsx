import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import AppointmentForm from '../AppoinmentForm/AppoinmentForm';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Faq/>
            <WorkingProcess/>
            <AppointmentForm/>
        </div>
    );
};

export default Home;