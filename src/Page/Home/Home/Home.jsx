import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Service from '../Service/Service';
import Faq from '../Faq/Faq';

const Home = () => {
    return (
        <div>
            <Banner/>
            <AboutUs/>
            <Service/>
            <Faq/>
        </div>
    );
};

export default Home;