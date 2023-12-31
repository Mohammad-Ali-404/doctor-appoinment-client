import React from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import AboutUs from '../Home/AboutUs/AboutUs';
import ChooseUs from './ChooseUs';
import AppointmentForm from '../Home/AppoinmentForm/AppoinmentForm';
import Team from '../Home/Team/Team';
import Faq from '../Home/Faq/Faq';
import WorkingProcess from '../Home/WorkingProcess/WorkingProcess';
import Contact from '../Home/Contact/Contact';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <HelmetProvider>
                <Helmet><title>About Us | One Care</title></Helmet>
            </HelmetProvider>
            <PageTitle heading={'About Us'} subHeading={'About Us'}/>
            <div className='py-10'>
                <AboutUs/>
                <ChooseUs/>
                <AppointmentForm/>
                <Team/>
                <Faq/>
                <WorkingProcess/>
                <Contact/>
            </div>
        </div>
    );
};

export default About;