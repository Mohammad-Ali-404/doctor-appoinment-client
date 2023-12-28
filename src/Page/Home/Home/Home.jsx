import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import AppointmentForm from '../AppoinmentForm/AppoinmentForm';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';
import Contact from '../Contact/Contact';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>Home | One Care</title></Helmet>
            </HelmetProvider>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Faq/>
            <WorkingProcess/>
            <AppointmentForm/>
            <Team/>
            <Testimonial/>
            <Contact/>
        </div>
    );
};

export default Home;