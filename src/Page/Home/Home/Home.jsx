import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';
import WorkingProcess from '../WorkingProcess/WorkingProcess';
import AppointmentForm from '../AppoinmentForm/AppoinmentForm';
import Team from '../Team/Team';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Faq/>
            <WorkingProcess/>
            <AppointmentForm/>
            <Team/>
            <Testimonial/>
        </div>
    );
};

export default Home;